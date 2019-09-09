<template>
    <div class="foster">
        <div class="head">
            <img class="arraw" @click="back" src="../../../../static/arraw.png" alt="">
            <p>门店详情</p>
        </div>
        <div class="tab-btn">
            <div class="line tab1">
                <p class="tab1-name">送店寄养</p>
                <div><div></div></div>
            </div>
            <div class="tab2">
                <p class="tab2-name">到店寄养</p>
                <div></div>
            </div>
        </div>
        <div class="jiyangstyle">
            <div>[人工待寄] 店铺安排寄养</div>
            <img src="../../../../static/back-arraw.png" alt="">
        </div>
        <div class="add-position">
            <div>寄</div>
            <p>请添加寄养地址</p>
            <img src="../../../../static/back-arraw.png" alt="">
        </div>
        <div class="shop-position">
            <div>店</div>
            <p>高碑店市莲花区莲花路1234号</p>
        </div>
        <div class="card-list">
            <div class="item" v-for="(item,index) in cards" :key="index"> 
                <div class="title">{{item.title}}</div>
                <div class="name">{{item.ctx}}</div>
                <img v-if="item.img" :src="item.img" alt="">
            </div>
            <div class="item-title"></div>
        </div>
        <div class="btn-box">
            <div class="btn" @click="submit">立即寄养</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            back(){
                this.$router.push("/shopdetail")
            },
            submit(){
                this.$router.push("/shopdetail") 
            }
        },
        data() {
            return {
                cards:[
                    {
                        title:"宠物名",
                        ctx:"包包猫"
                    },
                    {
                        title:"寄养服务",
                        ctx:"请选择寄养服务",
                        img:"../../../../static/back-arraw.png"
                    },
                    {
                        title:"寄养时间",
                        ctx:"2019-07-18 11:14",
                        img:"../../../../static/back-arraw.png"
                    },
                    {
                        title:"联系电话",
                        ctx:"17603211933",
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.foster{
    height: 100%;
    background: rgb(244,244,244);
    p{
        margin: 0;
        padding: 0;
    }
    .head{
        font-size: 0.6rem;
        color: rgb(255, 255, 255);
        background: rgb(250,142,109);
        position: relative;
        img{
            width: 0.5rem;
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
        }
        p{
            text-align: center;
            padding: 0.5rem;
        }
    }
    .tab-btn{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgb(255, 255, 255);
        margin: 0.2rem 0;
        font-size: 0.6rem;
        >div{
            padding: 0.5rem 0;
        }
        .line{
            position: relative;
            >div{
                position: absolute;
                width: 100%;
                bottom: 0.1rem;
                div{
                    margin: 0 0.2rem;
                    border: 2px solid rgb(250,142,109);
                    border-radius: 1rem;
                }
                
            }
        }
    }
    .jiyangstyle{
        display: flex;
        background: rgb(255, 255, 255);
        align-items: center;
        padding: 0.5rem;
        div{
            flex: 1;
            font-size: 0.6rem;
        }
        img{
            width: 0.5rem;
        }
    }
    .add-position{
        display: flex;
        font-size: 0.6rem;
        background: rgb(255, 255, 255);
        align-items: center;
        padding: 0.5rem;
        >div{
            color: rgb(255, 255, 255);
            background: rgb(250,142,109);
            border-radius: 50%;
            height: 1.5rem;
            width: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            font-size: 0.6rem;
            margin-right: 0.5rem;
        }
        p{
            flex: 1;
        }
        img{
            width: 0.5rem;
            height: 0.8rem;
        }
    }
    .shop-position{
        display: flex;
        font-size: 0.6rem;
        background: rgb(255, 255, 255);
        align-items: center;
        padding: 0.5rem;
        >div{
            color: rgb(255, 255, 255);
            background: rgb(250,142,109);
            border-radius: 50%;
            height: 1.5rem;
            width: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            font-size: 0.6rem;
            margin-right: 0.5rem;
        }
        p{
            flex: 1;
        }
        
    }
    .card-list{
        font-size: 0.6rem;
        background: rgb(255, 255, 255);
        margin-top: 0.5rem;
        .item{
            border-bottom: 2px solid rgb(244,244,244);
            display: flex;
            padding: 0.5rem;
            align-items: center;
            .title{
                width: 3rem;
            }
            .name{
                flex: 1;
            }
            img{
                width: 0.5rem;
            }
        }
    }
    .btn-box{
        padding: 0.5rem;
        .btn{
            background: rgb(250,142,109);
            border-radius: 2rem;
            padding: 0.5rem;
            font-size: 0.6rem;
            color: rgb(255, 255, 255);
            text-align: center;
        }
    }
}
</style>