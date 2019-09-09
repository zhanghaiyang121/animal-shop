<template>
    <div class="mine">
        <div class="head">
            <div class="avatar">
                <img src="../../../static/cat1.jpg" alt="">
            </div>
            <div class="name-box">
                <div class="name">小包包啊~</div>
                <div class="id">ID：12345678</div>
            </div>
            <div class="btn">绑定宠物信息</div>
        </div>
        <div class="bg1">
            <img src="../../../static/bg1.png" alt="">
        </div>
        <div class="card-box">
            <div class="card1">
                <div class="title">
                    <p>我的订单</p>
                    <div>全部订单》</div>
                </div>
                <div class="icon-btn">
                    <div class="icon-btn-item" v-for="(item,index) in btnlist" :key="index">
                        <img :src="item.img" alt="">
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
            <div class="card2">
                <div class="ditu">
                    <img src="../../../static/ditu.png" alt="">
                    <p>定位服务</p>
                </div>
                <div class="card-line"></div>
                <div class="card2-mine">
                    <img src="../../../static/mine.png" alt="">
                    <p>定位服务</p>
                </div>
                <div class="card-line"></div>
                <div class="reply">
                    <img src="../../../static/reply.png" alt="">
                    <p>定位服务</p>
                </div>
            </div>
            <div class="card3">
                <div class="systemset">
                    <img src="../../../static/systemset.png" alt="">
                    <p>系统设置</p>
                </div>
                <div class="card-line"></div>
                <div class="reply">
                    <img src="../../../static/kefu.png" alt="">
                    <p>在线客服</p>
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
        data(){
            return{
                btnlist:[
                    {img:"../../../static/order1.png",name:"待付款",num:2},
                    {img:"../../../static/order2.png",name:"待发货",num:0},
                    {img:"../../../static/order3.png",name:"待收货",num:0},
                    {img:"../../../static/order4.png",name:"待评价",num:2}
                    ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.mine{
    background: rgb(241,241,241);
    height: 100%;
    position: relative;
    .head{
        background: rgb(250,147,117);
        display: flex;
        align-items: center;
        padding: 0.5rem;
        .avatar{
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: rgb(255,255,255);
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%
            }
        }
        .name-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            margin:0 0.5rem;
            .name{
                font-size: 0.6rem;
                color: rgb(255,255,255);
            }
            .id{
                font-size: 0.4rem;
                color: rgb(255,255,255);
            }
        }
        .btn{
            background: rgb(242,128,103);
            height: 1.5rem;
            border-radius: 1rem;
            color: rgb(255,255,255);
            font-size: 0.6rem;
            padding: 0 0.5rem;
            line-height: 1.5rem;
        }
    }
    .bg1{
        background: rgb(250,147,117);
        height: 2rem;
        img{
            width: 100%;
            margin: 0;
            padding: 0;
            height: 100%;
        }
    }
    .card-box{
        position: absolute;
        top: 5rem;
        width: 100%;
        .card1{
            background: rgb(255,255,255);
            border-radius: 0.2rem;
            margin: 0 0.5rem;
            padding: 0 0.5rem;
            margin-bottom: 0.5rem;
            .title{
                display: flex;
                align-items: center;
                p{
                    flex: 1;
                    font-size: 0.6rem;
                }
                div{
                    color: rgb(175,175,176);
                    font-size: 0.6rem;
                }
            }
            .icon-btn{
                display: flex;
                align-items: center;
                justify-content: space-around;
                .icon-btn-item{
                    font-size: 0.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 1rem;
                    }
                }
            }
        }
        .card2{
            background: rgb(255,255,255);
            border-radius: 0.2rem;
            margin: 0 0.5rem;
            padding: 0 0.5rem;
            margin-bottom: 0.5rem;
            .card-line{
                border-bottom:2px solid rgb(241,241,241);
                height: 0;
                padding: 0;
            }
            >div{
                padding: 0.5rem;
            }
           .ditu{
               display: flex;
               align-items: center;
               img{
                   margin-right: 0.5rem;
                   width: 1rem;
               }
               p{
                   margin: 0;
                   padding: 0;
                   font-size: 0.6rem;
               }
           } 
           .card2-mine{
               display: flex;
               align-items: center;
               img{
                   margin-right: 0.5rem;
                   width: 1rem;
               }
               p{
                   margin: 0;
                   padding: 0;
                   font-size: 0.6rem;
               }
           }
           .reply{
               display: flex;
               align-items: center;
               img{
                   margin-right: 0.5rem;
                   width: 1rem;
               }
               p{
                   margin: 0;
                   padding: 0;
                   font-size: 0.6rem;
               }
           }
        }
        .card3{
            background: rgb(255,255,255);
            border-radius: 0.2rem;
            margin: 0 0.5rem;
            padding: 0 0.5rem;
            margin-bottom: 0.5rem;
            .card-line{
                border-bottom:2px solid rgb(241,241,241);
                height: 0;
                padding: 0;
            }
            >div{
                padding: 0.5rem;
            }
           .reply{
               display: flex;
               align-items: center;
               img{
                   margin-right: 0.5rem;
                   width: 1rem;
               }
               p{
                   margin: 0;
                   padding: 0;
                   font-size: 0.6rem;
               }
           } 
           .systemset{
               display: flex;
               align-items: center;
               img{
                   margin-right: 0.5rem;
                   width: 1rem;
               }
               p{
                   margin: 0;
                   padding: 0;
                   font-size: 0.6rem;
               }
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
