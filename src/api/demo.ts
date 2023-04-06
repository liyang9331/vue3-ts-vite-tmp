import request from "@/utils/request";

export function rubbish(params: any) {
  return request({
    url: "https://api.oioweb.cn/api/ai/rubbish",
    method: "post",
    params,
  });
}
