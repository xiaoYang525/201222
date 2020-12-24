import ajax from './ajax'

export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList'
    })
}