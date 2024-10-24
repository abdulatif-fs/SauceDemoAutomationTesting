export function isProductExist(productName, ProductList) {
    console.log('======================', productName, '===================', ProductList)
    if(ProductList.includes(productName)){
        return true
    }
    else{
        return false
    }
}