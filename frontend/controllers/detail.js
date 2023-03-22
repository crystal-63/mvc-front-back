import {
    detail
} from "../views";
import {
    getMobileDetailModel
}from "../models"

export async function detailView (params) {
    //获取数据
    const res = await getMobileDetailModel(params);

    return detail(res.data);
}