import httpInstance from "@/utils/http.ts";

export function getCategoryAPI(id) {
    return httpInstance({
        url: '/category',
        method: 'GET',
        params: {
            id
        }
    })
}