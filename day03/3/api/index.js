import ajax from './ajax'

export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
        
    })
}
export function reqBannerList(){
    return ajax('/cms/banner')
}