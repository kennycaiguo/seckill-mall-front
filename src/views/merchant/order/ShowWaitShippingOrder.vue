<!--显示所有订单-->
<template>
    <el-container>
        <el-header>
            <merchant-header></merchant-header>
        </el-header>
        <el-main>
            <el-table :data="orders" stripe>
                <el-table-column label="商品名" prop="userOrders[0].goodsName">
                </el-table-column>

                <el-table-column label="单价" prop="userOrders[0].price">
                </el-table-column>

                <el-table-column label="数量" prop="userOrders[0].amount">
                </el-table-column>

                <el-table-column label="状态" prop="status">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" v-if="scope.row.status === '待发货'" @click="deliverGoods(scope.row)">发货</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    import axios from "../../../utils/net";
    import api from "../../../utils/api";
    import utils from "../../../utils/utils";
    import MerchantHeader from "../../../components/merchant/Header";
    import consts from "../../../utils/consts";

    export default {
        name: "ShowWaitShippingOrder",
        components: {
            MerchantHeader
        },
        data() {
            return {
                orders: [],
            };
        },
        methods: {
            loadData() {
                let that = this;
                axios.post(api.adminShowOrder, {
                    status: consts.WAIT_SHIPPING
                }).then(response => {
                    utils.handleRsp(response.data, that.$message, rspData => {
                        let orders = rspData.userOrderInfos;
                        for (let order of orders) {
                            order.status = that.transferStatus(order.status);
                        }
                        that.orders = orders;
                    });
                });
            },
            transferStatus(status) {
                return utils.transferOrderStatus(status);
            },
            deliverGoods(row) {
                let that = this;
                axios.post(api.adminDeliverGoods, {
                    orderId: row.orderId,
                }).then(response => {
                    utils.handleRsp(response.data, that.$message, () => {
                        that.loadData();
                    });
                });
            },
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>

</style>
