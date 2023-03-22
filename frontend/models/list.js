export function getMobileListModel () {
    return axios.get('http://localhost:8080/get_mobile_list');
}

export function removeMobileModel (id) {
    return axios.post('http://localhost:8080/remove_mobile',Qs.stringify({id}))
}

export function addMobileModel (mobileInfo) {
    return axios.post('http://localhost:8080/add_mobile',Qs.stringify(mobileInfo));
}