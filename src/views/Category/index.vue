<script setup>
// import GoodsItem from "@/views/Home/components/GoodsItems.vue";
import { getCategoryAPI } from "@/apis/categoryAPI";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const categoryData = ref({});
const route = useRoute();//获取路由参数

const getCategoryData = async () => {
    const res = await getCategoryAPI(route.params.id);//获取路由参数id
    categoryData.value = res.result;
    console.log(res);
}

onMounted(() => {
    getCategoryData();
})

</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
        <div class="bread-container">
        <!-- 面包屑 -->
         <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        </div>
    </div>
</template>

<style scoped lang="scss">



</style>

