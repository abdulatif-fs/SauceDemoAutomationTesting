export function isProductExist(productName, ProductList) {
    // console.log('======================', productName, '===================', ProductList)
    if(ProductList.includes(productName)){
        return true
    }
    else{
        return false
    }
}

export function isEmpty(ProductList){
    if(ProductList.length === 0){
        return true
    }
    else{
        return false
    }
}