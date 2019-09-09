<template>
    <div class="order">
        <div class="order-title">
            <img class="arraw" @click="back" src="../../../static/arraw.png" alt="">
            <p>门店详情</p>
            <img class="reply" src="../../../static/reply_w.png" alt="">
        </div>
        <div class="orders">
            <div class="order-des">
                <img src="../../../static/cat1.jpg" alt="">
                <div class="order-right">
                    <div class="order-name">{{order.name}}</div>
                    <div class="order-descript">{{order.des}}</div>
                    <div class="order-des-fee">￥{{order.fee}}</div>
                </div>
            </div>
            <div class="order-list">
                <div class="list-item" v-for="(item,index) in order.list" :key="index">
                    <div class="item-name">{{item.name}}</div>
                    <div class="item-count">*{{item.count}}</div>
                    <div class="item-fee">{{item.fee}}</div>
                </div>
                <div class="list-line"></div>
                <div class="food-fee">
                    <img src="../../../static/shop1.png" alt="">
                    <p class="fee-style">粮食费用</p>
                    <p class="fee">￥{{order.foodfee}}</p>
                </div>
                <div class="list-line"></div>
                <div class="youhui">
                    <img class="shop2" src="../../../static/shop2.png" alt="">
                    <p class="fee-style">优惠券</p>
                    <div class="info">暂无可用优惠券</div>
                    <img class="arraw" src="../../../static/back-arraw.png" alt="">
                </div>
                <div class="ticket">
                    <img class="shop2" src="../../../static/shop2.png" alt="">
                    <p class="fee-style">发票</p>
                    <div class="info">{{order.ticket}}</div>
                    <img class="arraw" src="../../../static/back-arraw.png" alt="">
                </div>
                <div class="totalfee-box">
                    <div class="fee-name">订单总额</div>
                    <div class="totalfee">￥{{order.totlefee}}</div>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <div class="btn">立即支付</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                order:{
                   name:"小型犬洗澡美容套餐",
                   des:"包含小型犬洗澡、美容服务...",
                   fee:326,
                   list:[
                        {
                            name:"喂食洗澡",
                            count:1,
                            fee:280
                        },
                        {
                            name:"寄养*3",
                            count:3,
                            fee:280
                        }
                   ],
                   foodfee:128,
                   ticket:"上海包图网络有限公司",
                   totlefee:430
                }
            }
        },
        methods: {
            back(){
                this.$router.push("/shopdetail")
            }
        },
    }
</script>

<style lang="scss" scoped>
.order{
    background: rgb(255, 255, 255);
    height: 100%;
    p{
        padding: 0;
        margin: 0;
    }
}
.order-title{
    display: flex;
    align-items: center;
    background: rgb(250,142,109);
    font-size: 0.6rem;
    padding: 0.5rem;
    img{
        width: 1rem;
    }
    .arraw{
        width: 0.5rem;
    }
    p{
        color: rgb(255, 255, 255);
        flex: 1;
        text-align: center;
    }
}
.orders{
    font-size: 0.6rem;
    .order-des{
        padding: 0.5rem;
        display: flex;
        img{
            width: 4rem;
            height: 4rem;
            border-radius: 0.2rem;
        }
        .order-right{
            display: flex;
            flex-direction: column;
            margin-left: 0.5rem;
            .order-name{
                margin: 0.1rem 0;
            }
            .order-descript{
                color: rgb(205,205,205);
                margin: 0.1rem 0;
                flex: 1;
            }
            .order-des-fee{
                color: rgb(255,77,87);
                margin: 0.1rem 0;
            }
        }
    }   
    .order-list{
        padding: 0 0.5rem;
        .list-item{
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
            .item-name{
                flex: 1;
            }
            .item-count{
                margin: 0 1rem;
            }
        }
        .list-line{
            height: 2px;
            background: rgb(234,234,234);
        }
        .food-fee{
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            img{
                height: 1rem;
                width:1rem;
                margin-right: 1rem;
            }
            .fee-style{
                flex: 1;
            }
            .fee{
                color: rgb(255,77,87);
            }
        }
        .youhui{
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            .shop2{
                height: 1rem;
                width:1rem;
                margin-right: 1rem;
            }
            .fee-style{
                flex: 1;
            }
            .info{
                color: rgb(205,205,205);
                margin: 0 0.5rem;
            }
            .arraw{
                width: 0.5rem;
            }
        }
        .ticket{
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            .shop2{
                height: 1rem;
                width:1rem;
                margin-right: 1rem;
            }
            .fee-style{
                flex: 1;
            }
            .info{
                color: rgb(0, 0, 0);
                margin: 0 0.5rem;
            }
            .arraw{
                width: 0.5rem;
            }
        }
        .totalfee-box{
            display: flex;
            align-items: center;
            .fee-name{
                font-size: 0.6rem; 
                flex: 1;
            }
            .totalfee{
                font-size: 1rem;
                color:rgb(255,77,87);
            }

        }
    }
}
.btn-box{
        position: absolute;
        width: 100%;
        bottom: 0rem;
        padding: 0.5rem 0;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        .btn{
            background: rgb(250,142,109);
            padding:0.5rem 0;
            margin: 0 0.5rem;
            border-radius: 2rem;
            text-align: center;
            color: rgb(255, 255, 255);
            font-size: 0.6rem;      
        }
    }
</style>