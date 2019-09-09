<template>
    <div class="bag">
        <!-- 标题 -->
        <div class="head">我的背包</div>
        <!-- 切换按钮 -->
        <div class="bag-tabbar">
            <div :class="{line:currentindex==index}" class="item" v-for="(item,index) in tabs" :key="index">
                <p>{{item.name}}</p>
                <div></div>
            </div>
        </div>
        <!-- 订单 -->
        <div class="orders">
            <div class="order-item" v-for="(item,index) in orders" :key="index">
                <div class="time">下单时间:{{item.time}}</div>
                <div class="content">
                    <img :src="item.img" alt="">
                    <div>
                        <div class="item-name">
                            <span class="name">{{item.name}}</span>
                            <span class="youhui">惠</span>
                            <span class="state">{{item.state}}</span>
                        </div>
                        <div class="descript">{{item.content}}</div>
                        <div class="money">￥{{item.cost}}</div>
                    </div>
                </div>
                <div class="btnlist">
                    <div class="btnlist-item" v-for="(btnitem,btnkey) in item.btnlist" :key="btnkey">{{btnitem.title}}</div>
                </div>
            </div>
        </div>
        <tabbar class="tab"></tabbar>
    </div>
</template>

<script>
import tabbar from "../../components/tabbar"
    export default {
        components:{
            tabbar
        },
        data() {
            return {
                tabs:[{name:"全部"},{name:"待付款"},{name:"待确认"},{name:"待收货"}],
                currentindex:0,
                orders:[
                    {
                        time:"2019-07-18   14:08",
                        img:"../../../static/cat1.jpg",
                        name:"小型犬洗澡美容套餐",
                        state:"待支付",
                        content:"包含小型犬洗澡、美容服务...",
                        cost:"248",
                        btnlist:[
                            {
                                title:"开具发票"
                            },
                            {
                                title:"去付款"
                            }
                        ]
                    },
                    {
                        time:"2019-07-18   14:08",
                        img:"../../../static/cat1.jpg",
                        name:"小型犬洗澡美容套餐",
                        state:"待支付",
                        content:"包含小型犬洗澡、美容服务...",
                        cost:"248",
                        btnlist:[
                            {
                                title:"开具发票"
                            },
                            {
                                title:"去付款"
                            }
                        ]
                    },
                    {
                        time:"2019-07-18   14:08",
                        img:"../../../static/cat1.jpg",
                        name:"小型犬洗澡美容套餐",
                        state:"待支付",
                        content:"包含小型犬洗澡、美容服务...",
                        cost:"248",
                        btnlist:[
                            {
                                title:"开具发票"
                            },
                            {
                                title:"去付款"
                            }
                        ]
                    },
                    {
                        time:"2019-07-18   14:08",
                        img:"../../../static/cat1.jpg",
                        name:"小型犬洗澡美容套餐",
                        state:"待支付",
                        content:"包含小型犬洗澡、美容服务...",
                        cost:"248",
                        btnlist:[
                            {
                                title:"开具发票"
                            },
                            {
                                title:"去付款"
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.bag{
    background: rgb(244,244,244);
    height: 100%;
    display: flex;
    flex-direction: column;
}
.head{
    font-size: 0.8rem;
    color: rgb(255,255,255);
    background: rgb(250,147,117);
    text-align: center;
    padding: 0.5rem 0;
}
.bag-tabbar{
    // display: flex;
    justify-content: space-around;
    background: rgb(255,255,255);
    .item{
        display: inline-block;
        margin: 0 0.2rem;
        font-size: 0.8rem;
        color: rgb(157,157,157);
        p{
            margin: 0;
            padding: 0;
            height: 2rem;
            line-height: 2rem;
        }
    }
    .line{
        color: rgb(0,0,0);
        position: relative;
        div{
            border: 2px solid rgb(250,147,117);
            border-radius: 1rem;
            position: absolute;
            width: 100%;
            bottom: 0.2rem;
            left:0;
        }
    }
}
.orders{
    margin-bottom: 2rem;
    margin-top: 1px;
    .order-item{
        background: rgb(255,255,255);
        padding: 0 0.5rem;
        margin-bottom: 0.5rem;
        .time{
            font-size: 0.6rem;
            color: rgb(157,157,157);
            padding: 0.5rem 0;
        }
        .content{
            display: flex;
            align-items: center;
            img{
                width: 3rem;
                border-radius: 0.2rem;
                margin-right: 0.5rem;
            }
            >div{
                flex: 1;
                .item-name{
                    font-size: 0.6rem;
                    display: flex;
                    .name{

                    }
                    .youhui{
                        background: rgb(250,147,117);
                        border-radius: 0.2rem;
                        color: rgb(255,255,255);
                        padding: 0 0.2rem;
                    }
                    .state{
                        flex: 1;
                        text-align: right;
                        color: rgb(250,147,117);
                    }
                }
                .descript{
                    font-size: 0.6rem;
                    color: rgb(157,157,157);
                }
                .money{
                    color: rgb(241,54,33);
                    font-size: 0.6rem;
                }
            }

        }
        .btnlist{
            display: flex;
            justify-content: flex-end;
            padding: 0.5rem 0;
            .btnlist-item{
                border: 1px solid rgb(157,157,157);
                border-radius: 1rem;
                padding: 0 0.2rem;
                font-size: 0.6rem;
                color: rgb(157,157,157);
                margin: 0 0.2rem;
                
            }
        }
    }
}
.tab{
        position: fixed;
        bottom: 0;
        width: 100%;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
        background: rgb(255,255,255);
    }
</style>