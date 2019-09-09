<template>
    <div class="fenlei">
        <div class="head">
            <div class="head-top">
                <img class="home-icon" src="../../../static/home_w.png" alt="">
                <p class="title">宠物首页</p>
                <img class="home-icon" src="../../../static/info.png" alt="">
            </div>
            <div class="search">
                <img src="../../../static/search.png" alt="">
                <input placeholder="搜索宠物粮食/保洁" type="text">
            </div>
        </div>
        <div class="order-pic">
            <div class="order-item" v-for="(item,index) in piclist" :key="index" >
                <img :src="item.img" alt="">
                <div class="mask"></div>
                <p>{{item.name}}</p>
            </div>
        </div>
        <div class="paixu">
            <div class="item" v-for="(item,index) in paixu" :key="index">
                <p class="text">{{item.text}}</p>
                <div class="sanjiao"></div>
            </div>
        </div>
        <div class="card-list">
            <div class="cards-box">
                <div class="carditem" v-for="(item,index) in cards" :key="index">
                    <img :src="item.img" alt="">
                    <div class="right">
                        <div class="shopname">{{item.name}}</div>
                        <div class="pingjia">
                            <div class="star">
                                <img  src="../../../static/star_a.png" alt="">
                                <img  src="../../../static/star_a.png" alt="">
                                <img  src="../../../static/star_a.png" alt="">
                                <img  src="../../../static/star_a.png" alt="">
                                <img  src="../../../static/star_a.png" alt="">
                                <p>4.9</p>
                            </div>
                            <div class="peoples">{{item.num}}人服务过</div>
                        </div>
                        <div class="position">
                            <img src="../../../static/position.png" alt="">
                            <p>{{item.position}}</p>
                        </div>
                        <div class="evaluates">
                            <div v-for="(evaluateitem,evaluateindex) in item.evaluates" :key="evaluateindex">
                                {{evaluateitem.name}}
                            </div>
                        </div>
                    </div>
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
                piclist:[
                    {
                        img:"../../../static/cat1.jpg",
                        name:"猫猫"
                    },
                    {
                        img:"../../../static/cat2.jpg",
                        name:"狗狗"
                    },
                    {
                        img:"../../../static/cat3.jpg",
                        name:"清洗"
                    },
                    {
                        img:"../../../static/cat1.jpg",
                        name:"粮食"
                    },
                    {
                        img:"../../../static/cat1.jpg",
                        name:"打针"
                    }
                ],
                paixu:[
                    {
                        text:"综合排序"
                    },
                    {
                        text:"附近"
                    },
                    {
                        text:"智能排序"
                    },
                    {
                        text:"筛选"
                    }
                ],
                cards:[
                    {
                        img:"../../../static/cat1.jpg",
                        name:"包子宠物保养店",
                        num:499,
                        mark:4.9,
                        position:"高碑店市莲花路莲花社区1234号",
                        evaluates:[
                            {
                                name:"很专业"
                            },
                            {
                                name:"服务好"
                            },
                            {
                                name:"评价多"
                            },
                            {
                                name:"速度快"
                            }
                        ]
                    },
                    {
                        img:"../../../static/cat1.jpg",
                        name:"包子宠物保养店",
                        num:499,
                        mark:4.9,
                        position:"高碑店市莲花路莲花社区1234号",
                        evaluates:[
                            {
                                name:"很专业"
                            },
                            {
                                name:"服务好"
                            },
                            {
                                name:"评价多"
                            },
                            {
                                name:"速度快"
                            }
                        ]
                    },
                    {
                        img:"../../../static/cat1.jpg",
                        name:"包子宠物保养店",
                        num:499,
                        mark:4.9,
                        position:"高碑店市莲花路莲花社区1234号",
                        evaluates:[
                            {
                                name:"很专业"
                            },
                            {
                                name:"服务好"
                            },
                            {
                                name:"评价多"
                            },
                            {
                                name:"速度快"
                            }
                        ]
                    },
                    {
                        img:"../../../static/cat1.jpg",
                        name:"包子宠物保养店",
                        num:499,
                        mark:4.9,
                        position:"高碑店市莲花路莲花社区1234号",
                        evaluates:[
                            {
                                name:"很专业"
                            },
                            {
                                name:"服务好"
                            },
                            {
                                name:"评价多"
                            },
                            {
                                name:"速度快"
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.fenlei{
    display: flex;
    flex-direction: column;
    background: rgb(245, 245, 245);
    height: 100%;
    .head{
        height: 4rem;
        background: rgb(250,147,117);
        padding: 0 0.5rem;
        padding-top: 0.5rem;
        .head-top{
            width: 100%;
            display: flex;
            align-items: center;
            .home-icon{
                height: 1rem;
            }
            .title{
                flex: 1;
                margin: 0;
                padding: 0;
                color: rgb(255,255,255);
                font-size: 0.8rem;
                text-align: center;
            }
        }
        .search{
            width: 15rem;
            text-align: center;
            margin-top: 0.5rem;
            position: relative;
            img{
                position: absolute;
                height: 0.8rem;
                top: 0.5rem;
                left:0.5rem;
            }
            input{
                width: 11rem;
                border: none;
                height: 1.5rem;
                border-radius: 1rem;
                background: rgb(256,165,138);
                outline: none;
                padding: 0 2rem;
                color:rgb(255,255,255)
            }
        }
        
    }
    .order-pic{
        background: rgb(255,255,255);
        display: flex;
        justify-content: space-around;
        padding: 0.5rem 0;
        .order-item{
            font-size: 0.6rem;
            color: rgb(255,255,255);
            position: relative;
            .mask{
                background: rgba(0,0,0,0.2);
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                border-radius: 0.2rem;
            }
            img{
                display: block;
                width: 2.5rem;
                border-radius: 0.2rem;
            }
            p{
                position: absolute;
                top: 0.5rem;
                left: 0;
                margin: 0;
                padding: 0;
                width: 100%;
                text-align: center;

            }
        }
    }
    .paixu{
        display: flex;
        justify-content: space-around;
        background: rgb(255,255,255);
        margin-top: 2px;
        padding: 0.5rem 0;
        .item{
            position: relative;
            padding-right: 0.8rem;
            p{
                font-size: 0.6rem;
                color: rgb(168,168,168);
                margin: 0;
                padding: 0;
            }
            div{
                position: absolute;
                top: 0.3rem;
                right: 0rem;
                width: 0;
                border:0.2rem solid;
                border-color: rgb(168,168,168) transparent  transparent  transparent ; 
                
            }
        }
    }
    .card-list{
        flex: 1;
        overflow: auto;
        .cards-box{
            padding-bottom: 3rem;
            .carditem{
                margin-top: 0.5rem;
                padding: 0.8rem;
                background: rgb(255,255,255);
                display: flex;
                font-size: 0.6rem;
                align-items: center;
                p{
                    margin: 0;
                    padding: 0;
                }
                >img{
                    width: 5rem;
                    border-radius: 0.2rem;
                    margin-right: 0.5rem;
                }
                .right{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .pingjia{
                        display: flex;
                        align-items:baseline;
                        .star{
                            display: flex;
                            align-items: center;
                            flex: 1;
                            img{
                                display: block;
                                width: 0.6rem;
                                height: 0.6rem;
                                margin-right: 0.1rem;
                            }
                            p{
                                font-size: 0.6rem;
                                color: rgb(250,147,117);
                            }
                        }
                        .peoples{
                            font-size: 0.5rem;
                            color: rgb(164, 164, 164);
                        }
                    }
                    .position{
                        display: flex;
                        align-items: center;
                        img{
                            width: 0.5rem;
                        }
                        p{
                            font-size: 0.4rem;
                            color: rgb(164, 164, 164);
                        }
                    }
                    .evaluates{
                        display: flex;
                        div{
                            padding: 0.1rem 0.2rem;
                            font-size: 0.4rem;
                            color: rgb(164, 164, 164);
                            border:1px solid rgb(164, 164, 164);
                            border-radius: 0.5rem;
                            margin: 0 0.1rem;
                        }
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

}
</style>