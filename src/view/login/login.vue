<template>
    <div>
        <!-- 头部 -->
        <div class="head">
            <div class="mask"></div>
            <div class="title">
                <p>欢迎来到宠物社区！</p>
            </div>
            <img src="../../assets/cat.jpg" alt="">
            <div class="line"></div>
        </div>
        <!-- 头像 -->
        <div class="avatar">
            <img src="../../assets/avatar.png" alt="">
        </div>
        <!-- 切换按钮 -->
        <div class="tab-btn">
            <div class="item-btn" @click="logintoregister" :class="{'line':currentindex==0}">登录<div></div></div>
            <div class="item-btn" @click="logintoregister" :class="{'line':currentindex==1}">注册<div></div></div>
        </div>
        <!-- 输入框 -->
        <div class="input-box">
            <div></div>
            <div class="item-input">
                <img class="phone-icon" src="../../assets/phone.png" alt=""><input placeholder="请输入手机号" type="text">
            </div>
            <div class="item-input">
                <img class="code-icon" src="../../assets/code.png" alt=""><input placeholder="请输入验证码" type="text">
            </div>
            <p class="password">密码登录</p>
        </div>
        <!-- 提交按钮 -->
        <div class="btn-box">
            <div class="button">登录</div>
        </div>
        <!-- 底部图案 -->
        <img class="foot" src="../../assets/bg1.png" alt="">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentindex:0
            }
        },
        methods: {
            logintoregister(){
                if(this.currentindex==1){
                    this.currentindex=0
                }else{
                    this.currentindex=1
                }
            }   
        }
    }
</script>

<style lang="scss" scoped>
.head{
    height: 8rem;
    overflow: hidden;
    position: relative;
    .mask{
        height: 100%;
        width:100%;
        background: rgba(0,0,0,0.3);
        position: absolute;
        top:0;
    }
    .title{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        p{
            height: 100%;
            width: 100%;
            text-align: center;
            line-height: 5rem;
            font-size: 1rem;
            color: rgb(255,255,255);
        }
    }
    img{
        width: 16rem;
        margin: 0;
        padding: 0;
        border:none;
    }
    .line{
        position: absolute;
        height: 2rem;
        background: rgb(255,255,255);
        z-index: 1;
        bottom: -1rem;
        left:-1rem;
        width: 18rem;
        border-radius: 60%/2rem 2rem 0 0;
    }
}
.avatar{
        position: absolute;
        z-index: 2;
        top: 5rem;
        left: 5.5rem;
        background: rgb(255,255,255);
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        text-align: center;
        img{
            width: 3rem;
            margin-top: 0.5rem;
        };
        box-shadow :2px 2px 10px rgba(72, 191, 238,0.2)
    }
.tab-btn{
    margin-top: 4rem;
    margin-bottom: 1rem;
    display: flex;
    font-size: 0.6rem;
    padding: 0 2rem;
    .item-btn{
        margin-right: 1rem;
        position: relative;
        padding-bottom:0.5rem;
    }
    .line{
        color: rgb(250,147,117);
        div{
            position: absolute;
            width: 0.5rem;
            border-radius: 10px;
            border: 3px solid rgb(250,147,117);
            left: 0.2rem;
            bottom: 0;
        }
    }
}
.foot{
    position: absolute;
    width: 100%;
    bottom: 0;
    img{
        width: 100%;
        margin: 0;
        padding: 0;
    }
}
.input-box{
    padding: 0 2rem;
    .password{
       font-size: 0.6rem;
       color: rgb(250,147,117);
    }
}
.item-input{
    display: flex;
    border-bottom: 1px solid rgb(230,230,230);
    padding-bottom: 0.5rem;
    margin: 0.5rem 0;
   .phone-icon,.code-icon{
       width: 0.75rem;
       padding: 0;
       margin: 0;
       margin-right: 1rem;
   } 
   input{
       font-size: 0.6rem;
       border: none;
       height: 1rem;
       padding: 0;
       margin: 0;
       flex: 1;
       outline: none;
       color: rgb(188,188,188)
   }
   
}
.btn-box{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    .button{
        width: 10rem;
        height: 1.8rem;
        background: rgb(250,147,117);
        border-radius: 1rem;
        text-align: center;
        line-height: 1.8rem;
        color: rgb(255,255,255);
        font-size: 0.6rem;
    }
}
</style>