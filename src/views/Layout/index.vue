<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
    <div> 
    我是首页 
    <!-- 二级路由出口 -->
     <RouterView/>
    </div>
</template>

<!-- <script>
// 即使你没有写export，Vue loader也会自动处理
// 实际上相当于：
export default {
  name: 'Home'
}
</script> -->