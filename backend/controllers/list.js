const listModule = require('../modules/list');


function view (req,res){
    //调用模型层 获取mobel的数据
    // 提供给视图层

    const mobileData = listModule.getMobileList();
    
    res.render('list', {
        title: 'List',
        mobileData: mobileData
    })
}

function removeMobile (req,res){
    const id = req.body.id;

    const retId = listModule.removeMobile(id);

    res.send(retId);
}

function addMobile (req,res){
    /**
    * brand,
    * model,
    * price,
    * spec,
    */
    const newMobileInfo = listModule.addMobile({
        ...req.body
    })

    res.send(newMobileInfo);
}

module.exports = {
    view,
    removeMobile,
    addMobile
};