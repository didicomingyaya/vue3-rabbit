import httpInstance from "@/utils/http.ts";

export function getCategory() {
    return httpInstance({
        url: '/home/category/head',
        method: 'GET'
    })
}

