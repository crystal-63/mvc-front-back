export function getMobileDetailModel (params) {
    return axios.post('http://localhost:8080/get_mobile_detail',Qs.stringify(params));
}