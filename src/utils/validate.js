
export function stripscript(s) {
    var pattern=new RegExp("[`～*~!@#$%^&*()-+=<>?:\"{}|,./;'\\[\\]·~！@#￥%……&*（）——+={}|《》？：“”【】、；‘’，。、`]")
    var rs="";
    for (var i=0;i<s.length;i++){
        rs=rs+s.substr(i,1).replace(pattern,'');
    }
     return rs;
``}
export function isPhone (s) {
    //return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(s)
}