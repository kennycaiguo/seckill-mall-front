// 保存全局的调用后端的api的url信息

export default {
    // admin
    adminModifyGoods: '/admin/modifyGoods',
    adminUploadImg: '/admin/uploadImg',
    adminGetLoginStatus: '/admin/getLoginStatus',
    adminGetAllGoods: '/admin/getAllGoods',

    // user
    userGetLoginStatus: '/user/getLoginStatus',
    userLoginOut: '/user/loginOut',
    userGetAllReceiveAddress: '/user/getAllReceiveAddress',
    userCreateReceiveAddress: '/user/createReceiveAddress',
    userDeleteReceiveAddress: '/user/deleteReceiveAddress',
    userModifyUserAvatar: '/user/modifyUserAvatar',
    userGetAvatar: '/user/getAvatar',

    // other,all user can use
    getGoodsList: '/goods/getGoodsList',
    getGoodsById: '/goods/getGoodsById',
    orderCreate: '/order/create',
}
