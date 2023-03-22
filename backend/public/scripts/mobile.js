//处理前端业务请求

;(() => {
    const oMobileList = document.querySelector('#mobileList');
    const oAddBtn = document.querySelector('#addBtn');
    const oBrand = document.querySelector('#brand');
    const oModel = document.querySelector('#model');
    const oPrice = document.querySelector('#price');
    const oSpec = document.querySelector('#spec');

    const init = () =>{
        bindEvent();
    }

    function bindEvent (){
        oMobileList.addEventListener('click', handleRemoveBtnClick, false);
        oAddBtn.addEventListener('click', handleAddBtnClick, false);
    }

    function handleRemoveBtnClick (e) {
        const tar = e.target;
        const className = tar.className;

        if(className === 'remove-btn'){
            const id = tar.dataset.id;
            removeMobile(tar,id);
        }
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

        addMobile({
            brand: oBrand.value,
            model: oModel.value,
            price: oPrice.value,
            spec: oSpec.value
        })
    }

    function removeMobile (target,id) {
        axios.post('http://127.0.0.1:8080/list/remove_mobile', {
            id
        }).then(res =>{
            target.parentNode.remove;
        })
    }

    function addMobile (mobileInfo) {
        axios.post('http://127.0.0.1:8080/list/add_mobile', mobileInfo).then(res =>{
            createMobileListItem(res.data);
            resetForm();
        })
    }

    function createMobileListItem ({
        brand,
        model,
        id
    }) {
        const oItem = document.createElement('li');
        oItem.innerHTML = `
            <a href="http://127.0.0.1:8080/detail/${ id }">
              ${ brand + ' ' + model }
            </a>
            <button class="remove-btn data-id="${ id }">REMOVE</button>
        `;

        oMobileList.appendChild(oItem);
    }

    function resetForm () {
        oBrand.value = '';
        oModel.value = '';
        oPrice.value = '';
        oSpec.value = '';
    }

    init();
})();//作用域防止污染全局