import { list, moileListItem } from "../views";
import {
    addMobileModel,
    getMobileListModel,
    removeMobileModel
} from "../models"

export async function listView () {
    //获取数据
    const res = await getMobileListModel();


    return list(res.data);
}

export async function removeMobile () {
    const oMobileList = document.querySelector('#mobileList');

    function bindEvent () {
        oMobileList.addEventListener('click', handleRemoveBtnClick, false);
    }

    function handleRemoveBtnClick (e) {
        const tar = e.target;
        const className = tar.className;

        if(className === 'remove-btn'){
            const id = tar.dataset.id;
            removeMobileModel(id).then(res => {
                tar.parentNode.remove();
            })
        }
    }

    bindEvent();
}

export async function addMobile () {
    const oMobileList = document.querySelector('#mobileList');
    const oAddBtn = document.querySelector('#addBtn');
    const oBrand = document.querySelector('#brand');
    const oModel = document.querySelector('#model');
    const oPrice = document.querySelector('#price');
    const oSpec = document.querySelector('#spec');

    function bindEvent () {
        oAddBtn.addEventListener('click', handleAddBtnClick, false);
    }

    function handleAddBtnClick (e) {
        if(
            oBrand.value.length === 0 ||
            oModel.value.length === 0 ||
            oPrice.value.length === 0 ||
            oSpec.value.length === 0
        ){
            alert('Error');
            return;
        }

        addMobileModel({
            brand: oBrand.value,
            model: oModel.value,
            price: oPrice.value,
            spec: oSpec.value
        }).then(res => {
            createMobileListItem(res.data);
            resetForm()
        })

    }

    function createMobileListItem (mobileInfo){
        const oItem = document.createElement('li');
        oItem.innerHTML = moileListItem(mobileInfo);
        oMobileList.appendChild(oItem);
    }
    
    function resetForm () {
        oBrand.value = '';
        oModel.value = '';
        oPrice.value = '';
        oSpec.value = '';
    }

    bindEvent();
}

