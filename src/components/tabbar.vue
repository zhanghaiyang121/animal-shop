<template>
    <div class="tabbar">
        <div class="item" v-for="(item,index) in tablist" :key="index" @click="changepage(item)">
            <div class="img"><img :src="item.img" alt=""></div>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tablist:[
                    {
                        img:"../../static/home_a.png",
                        title:"首页",
                        path:"/home"
                    },
                    {
                        img:"../../static/fenlei.png",
                        title:"分类",
                        path:"/fenlei"
                    },
                    {
                        img:"../../static/bag.png",
                        title:"背包",
                        path:"/bag"
                    },
                    {
                        img:"../../static/mine.png",
                        title:"我的",
                        path:"mine"
                    }
                    ]
            }
        },
        methods: {
            changepage(item){
                this.$router.push(item.path)
            }
        },
    }
</script>

<style lang="scss" scoped>
.tabbar{
    display: flex;
    justify-content: space-around;
    padding-top: 0.5rem;
    .item{
        font-size: 0.6rem;
        text-align: center;
        .img{
            display: flex;
            height: 1rem;
            line-height: 1rem;
            justify-content: center;
            img{
                height: 100%;
            }
        }
    }
}
</style>