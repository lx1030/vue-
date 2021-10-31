import axios from "axios";
import {Message} from "element-ui";

//创建axios，赋给变量service
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/api";

const service =axios.create({
    baseURL:BASEURL, //http://api.web-jshtml.cn
    timeout:10000,
});


// request拦截器
service.interceptors.request.use(
    function (config)  {
    //此处进行token等数据处理
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(function (response) {
    console.log(response.data)
    let data=response.data
    if (data.error_code!==0){
        Message.error(data.msg);
        return  Promise.reject(data);
    }else{
        return response;
    }
}, function (error){
        //此处进行异常处理
        return Promise.reject(error);
});


export default service;
