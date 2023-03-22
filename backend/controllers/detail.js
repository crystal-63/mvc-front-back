const detailModel = require('../modules/detail');

function view (req,res){
    const id = req.params.id;

    const mobileDetail = detailModel.getMobileDetail(id);

    res.render('detail', {
        title: 'Detail',
        mobileDetail: mobileDetail
    })
}

module.exports = {
    view
};