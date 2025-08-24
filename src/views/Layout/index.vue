<script setup lang="ts">
import { RouterView } from 'vue-router';
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";

</script>

<template>
    <LayoutNav/>
    <LayoutHeader/>

    <!-- <RouterView/>  -->
    <!-- 二级路由 -->
     
    <LayoutFooter/>
</template>

<!-- <script>
// 即使你没有写export，Vue loader也会自动处理
// 实际上相当于：
export default {
  name: 'Home'
}
</script> -->