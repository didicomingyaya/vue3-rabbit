<script setup lang="ts">
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();
</script>

<template>
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <RouterLink v-for="i in item.children.slice(0,2)" :key="i.id" to="/">{{ i.name }}</RouterLink>
                <!-- 弹层layer位置 -->
                 <div class="layer">
                    <h4>分类推荐   <small>根据你的购买记录推荐</small></h4>
                    <ul>
                        <li v-for="i in item.goods" :key="i.id">
                            <RouterLink to="/">
                                <img :src="i.picture"/>
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        {{ i.name }}
                                    </p>
                                    <p class="desc ellipsis">{{ i.desc }}</p>
                                    <p class="price"><i>￥</i>{{i.price}}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>

</template>

<style scoped lang='scss'>

.home-category{
    width: 250px;
    height: 500px;
    background:  rgba(0, 0, 0, 0.8);
    position: relative;//设置了relative后，子元素的绝对定位absolute会相对最近的relative，如果没有relative，则相对body
    z-index: 99;//数值越大，层级越高，显示在上层
}

.menu{
    li {
        padding-left: 40px;
        width: 250px;
        height: 55px;
        line-height:55px;

        &:hover {
            background: $xtxColor;
            //鼠标悬停时改变颜色

        }

        a {
            margin-right: 5px;
            color: #fff;

            &:first-child {
                font-size: 16px;
            }

        }
        //在Vue Router中，<router-link>组件会渲染为<a>标签，这里选择的第一个a标签就是第一个RouterLink，即为item.name
        
        .layer {
            width: 900px;
            height: 600px;
            background: rgba(255, 255, 255, 0.8);
            position: absolute;
            left: 250px;//相对于父元素home-category定位,等于父元素的宽度150px;
            top: 0;
            display: none;//默认不显示，后文设置鼠标悬停时显示
            padding: 0 15px;
        }

        &:hover {
            .layer{
                display: block;
            }
        }
        //鼠标悬停时显示弹层
        
        h4 {
            font-size: 20px;
            font-weight: normal;
            line-height: 80px;


            small {
                font-size: 16px;
                color: #666;
            }
        }

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                width: 400px;
                height: 120px;
                margin-right: 15px;
                margin-bottom: 15px;
                border: 1px solid #eee;
                border-radius: 4px;
                background: #fff;

                // &:nth-child(2n) {
                //     margin-right: 0px;//2,4,6...这几个元素不设置右边距
                // }

                a {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 10px;
                    width: 100%;
                    height: 100%;

                    &:hover {
                        background: #e3f9f4;
                    }

                    img {
                        width: 95px;
                        height: 95px;
                    }

                    .info {
                        padding-left: 10px;
                        line-height: 24px;
                        overflow: scroll;

                        .name {
                            font-size: 16px;
                            color: #666;
                        }

                        .desc {
                            color: #999;
                        }

                        .price {
                            font-size: 22px;
                            color: $priceColor;
                        }

                        i{
                            font-size: 16px;
                        }


                    }

                }



            }
        }




    }
}



</style>