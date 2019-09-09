<template>
    <div class="shopdetail">
        <div class="shop-title">
            <img class="arraw" @click="back" src="../../../static/arraw.png" alt="">
            <p>门店详情</p>
            <img class="reply" src="../../../static/reply_w.png" alt="">
        </div>
        <div class="head">
            <img class="avatar" src="../../../static/cat1.jpg" alt="">
            <div class="right">
                <p>宠物门店</p>
                <div class="star">
                    <img src="../../../static/shop5.png" alt="">
                    <img src="../../../static/shop5.png" alt="">
                    <img src="../../../static/shop5.png" alt="">
                    <img src="../../../static/shop5.png" alt="">
                    <img src="../../../static/shop5.png" alt="">
                </div>
            </div>
            <div class="people">
                已有<span>{{num}}</span>预约
            </div>
        </div>
        <div style="width:100%;background:rgb(238,238,238);height:2px;"></div>
        <div class="shop-des">
            <p v-for="(item,index) in shopdes" :key="index">{{item.name}}</p>
        </div>
        <div class="list">
            <div class="pics">
                <img src="../../../static/cat1.jpg" alt="">
                <img src="../../../static/cat1.jpg" alt="">
                <img src="../../../static/cat1.jpg" alt="">
            </div>
            <div class="arraw">
                20 >
            </div>
        </div>
        <div style="height:0.3rem;width:100%;background:rgb(238,238,238);"></div>
        <div class="choose-box">
            <div class="shijian">
                <img src="../../../static/shop6.png" alt="">
                <p>用餐时间:</p>
                <p class="input">预定到店时间</p>
            </div>
            <div class="fuwu">
                <img src="../../../static/shop4.png" alt="">
                <p>选择服务:</p>
                <p class="input" @click="choose">选择服务类型</p>
            </div>
        </div>
        <div style="height:0.3rem;width:100%;background:rgb(238,238,238);"></div>
        <div class="pingjia">
            <div class="p-title">
                <p>服务评价（66）</p>
                <div class="more">全部></div>
            </div>
            <div class="hot-card">
                <div v-for="(item,index) in cards" :key="index">
                    <div class="card-title">
                        <div class="name">{{item.name}}</div>
                        <div class="star">
                            <img src="../../../static/shop5.png" alt="">
                            <img src="../../../static/shop5.png" alt="">
                            <img src="../../../static/shop5.png" alt="">
                            <img src="../../../static/shop5.png" alt="">
                            <img src="../../../static/shop5.png" alt="">
                        </div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="liuyan">{{item.evaluate}}</div>
                    <div class="img">
                        <img v-for="(imgitem,index) in item.imgs" :key="index" :src="imgitem.img" alt="">
                    </div>
                    <div class="card-line"></div>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <div class="btn" @click="submit">立即预约</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num:86,
                shopdes:[
                    {
                        name:"服务"
                    },
                    {
                        name:"洗澡"
                    },
                    {
                        name:"寄养"
                    }
                ],
                cards:[
                    {
                        name:"135****12356",
                        star:4,
                        time:"06-06",
                        evaluate:"这家宠物店的服务太好了，服务周到啊！！",
                        imgs:[
                            {
                                img:"../../../static/cat1.jpg"
                            },
                            {
                                img:"../../../static/cat1.jpg"
                            },
                            {
                                img:"../../../static/cat1.jpg"
                            }
                        ]
                    },
                    {
                        name:"135****12356",
                        star:4,
                        time:"06-06",
                        evaluate:"这家宠物店的服务太好了，服务周到啊！！",
                        imgs:[
                            {
                                img:"../../../static/cat1.jpg"
                            },
                            {
                                img:"../../../static/cat1.jpg"
                            },
                            {
                                img:"../../../static/cat1.jpg"
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            submit(){
                this.$router.push("/order")
            },
            back(){
                this.$router.push("/fenlei")
            },
            choose(){
                this.$router.push("/service")
            }
        },
    }
</script>

<style lang="scss" scoped>
.shopdetail{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: rgb(255, 255, 255);
    p{
        margin: 0;
        padding: 0;
    }
}
.shop-title{
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
.head{
    padding: 0 0.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    background: rgb(255,255,255);
    .avatar{
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
    }
    .right{
        font-size: 0.6rem;
        flex: 1;
        .star{
            img{
                width: 0.7rem;
            }
        }
    }
    .people{
        font-size: 0.6rem;
        span{
            font-size: 0.7rem;
            color: rgb(255,139,29);
        }
    }

}
.shop-des{
    padding: 0.5rem;
    display: flex;
    align-items: center;
    background: rgb(255,255,255);
    p{
        margin-right: 0.5rem;
        font-size: 0.6rem;
    }
}
.list{
    display: flex;
    align-items: center;
    background: rgb(255,255,255);
    padding: 0.5rem;
    .pics{
        display: flex;
        flex:1;
        align-items: center;
        img{
            width: 3rem;
            border-radius: 0.2rem;
            margin-right: 0.5rem;
        }
    }
    .arraw{
        color: rgb(255,139,29);
        font-size: 0.6rem;
    }
}
.choose-box{
    >div{
        background: rgb(255,255,255);
        margin-bottom: 2px;
        padding: 0.5rem ;
        display: flex;
        align-items: center;
        .input{
            color: rgb(164,164,164);
        }
    }
    .shijian,.fuwu{
        font-size: 0.6rem;
        img{
            width: 1rem;
        }
        p{
            margin: 0 0.5rem;
        }

    }
}
.pingjia{
    flex: 1;
    overflow: auto;
    .p-title{
        display: flex;
        font-size: 0.6rem;
        background: rgb(255,255,255);
        padding: 0.2rem 0.5rem;
        align-items: center;
        p{
            flex: 1;
        }
        div{
            color: rgb(255,139,29);
        }
    }
    .hot-card{
        >div{
            position: relative;
            background: rgb(255,255,255);
            font-size: 0.6rem;
            color: rgb(164,164,164);
            padding: 0.5rem;
           .card-title{
               display: flex;
               align-items: center;
               margin-bottom: 0.5rem;
               .star{
                   flex: 1;
                   img{
                       width: 0.6rem;
                   }
               }
           } 
           .liuyan{
               color: rgb(0,0,0);
               margin-bottom: 0.5rem;
           }
           .img{
               display: flex;
               align-items: center;
               img{
                   width: 3rem;
                   margin-right: 0.5rem;
               }
           }
           .card-line{
               height: 2px;
               width: 100%;
               background: rgb(238,238,238);
               position: absolute;
               bottom: 0;
               left: 0;
           }
        }
    }
}
.btn-box{
    padding: 0.5rem 0;
    div{
        border-radius: 2rem;
        height: 2rem;
        color: rgb(255, 255, 255);
        background: rgb(250,142,109);
        text-align: center;
        line-height: 2rem;
        font-size: 0.6rem;
        margin: 0 0.5rem;
    }
}
</style>