<template>
    <div class="home">
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
        <div class="banner">
            <img v-for="(item,index) in banners" :key="index" :src="item" alt="">
        </div>
        <div class="fenlei">
            <div class="item" :class="{line:currentindex==index}" v-for="(item,index) in tablist" :key="index">
                <p>{{item}}</p>
                <div class="line"></div>
            </div>
        </div>
        <div class="content">
            <div class="item" v-for="(item,index) in infos" :key="index" style="margin-bottom:0.5rem">
                <div class="item-head">
                    <img class="avatar" src="../../../static/cat1.jpg"/>
                    <div class="name">
                        <div>包子君</div>
                        <span>2019-7-18</span>
                    </div>
                    <div class="btn">去看看</div>
                </div>
                <div class="descript">人类喜欢宠物，不仅仅是因为他们可爱那么简单，背后其实有 深层次的心理因素</div>
                <div class="shopcard">
                    <img src="../../../static/cat1.jpg" alt="">
                    <div>
                        <p class="shopinfo">新的趋势是称呼猫和狗为伴侣动物</p>
                        <p class="shop-title">包子宠物店</p>
                    </div>
                </div>
                <div class="infos">
                    <div class="infos-item" v-for="(item,index) in infos" :key="index">
                        <img :src="item.img" alt="">
                        <p class="num">{{item.num}}</p>
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
              banners:['../../../static/cat1.jpg','../../../static/cat1.jpg','../../../static/cat1.jpg'],
              infos:[{img:"../../../static/duanxin.png",num:160},{img:"../../../static/share.png",num:160},{img:"../../../static/zan.png",num:160}],
              tablist:["宠物","猫猫","狗狗","粮食","洗澡"],
              currentindex:0
          }
      }  
    }
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
    position: relative;
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
    .banner{
        width: 100%;
        overflow: auto;
        display: flex;
        margin-top: 0.4rem;
        align-items: center;
        img{
            width:6rem;
            margin: 0 0.4rem;
            border-radius: 0.2rem;
        }
    }
    .fenlei{
        display: flex;
        justify-content: space-around;
        margin-top: 0.5rem;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
        .item{
            height: 2rem;
            position: relative;
            p{
                font-size: 0.6rem;
                color: rgb(0, 0, 0);
                margin: 0;
                padding: 0;
                padding-bottom: 0.2rem;
                line-height: 2rem;
            }
        }
        .line{
            p{
                color: rgb(250,147,117);  
            }
             
             div{
                 border: 2px solid rgb(250,147,117);
                 border-radius: 2rem;
                 position: absolute;
                 width: 100%;
                 bottom: 0.1rem;
             }   
        }
    }
    .content{
        height: 14rem;
        overflow: auto;
        padding: 0.5rem;
        .item{
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            border-radius: 0.5rem;
            // border:1px solid rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            .item-head{
                display: flex;
                align-items: center;
                .avatar{
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
                .name{
                    flex:1;
                    font-size: 0.6rem;
                    div{
                        font-weight: bold;
                    }
                    span{
                        color: rgb(144, 144, 144)
                    }
                }
                .btn{
                    width: 3rem;
                    height: 1.2rem;
                    background: rgb(250,147,117);
                    font-size: 0.6rem;
                    color: rgb(255,255,255);
                    border-radius: 1rem;
                    text-align: center;
                    line-height: 1.2rem;
                    margin-right: 1rem;
                }
            }
            .descript{
                font-size: 0.6rem;
                margin: 0.5rem 0;
            }
            .shopcard{
                display: flex;
                align-items: center;
                img{
                    width: 4rem;
                    border-top-left-radius: 0.5rem;
                    border-bottom-left-radius: 0.5rem;
                }
                div{
                    border-top-right-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    background: rgb(247, 247, 247);
                    font-size: 0.6rem;
                    padding: 0 0.2rem;
                    flex: 1;
                    .shopinfo{
                        font-weight: bolder;
                    }
                    .shop-title{
                        color: rgb(157,157,157)
                    }
                }
            }
            .infos{
                display: flex;
                justify-content: space-around;
                margin-top: 0.5rem;
                .infos-item{
                    display: flex;
                    align-items: center;
                    img{
                        width: 0.8rem;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                        font-size: 0.6rem;
                        margin-left: 0.5rem;
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