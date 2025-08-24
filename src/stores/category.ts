import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layoutAPI.ts";



export const useCategoryStore = defineStore('category', () => {
    // state 数据管理
    const categoryList = ref([])

    // action 方法管理
    const getCategory = async () => {

        const res = await getCategoryAPI();
        categoryList.value = res.result

    }

    return { categoryList, getCategory }
})