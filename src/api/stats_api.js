import service from "@/utils/request.js";

export function Getdata(data) {
  return service.request({
    method: "get",
    url: "Getdata",
    data,
  })
}
