import ajax from './ajax'
import mockAjax from './mockAjax'

export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
        
    })
}
export function reqBannerList(){
    return ajax('/cms/banner')
}

export function reqRcommends(){
    return mockAjax('/recommends')
}

export function reqFloors(){
    return mockAjax('/floors')
}

export function reqSearch (searchParams){
   return  ajax.post('/list',searchParams)
}