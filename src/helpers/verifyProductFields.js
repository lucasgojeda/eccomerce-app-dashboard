

export const verifyProductFields = ( product, img2 ) => { 

    const { category, name, price, quantity, description } = product;

    let emptys = [];

    if ( category.name === ''){
        emptys = [
            ...emptys,
            'category'
        ]
    }
    if ( name === ''){
        emptys = [
            ...emptys,
            'name'
        ]
    }
    if ( price === ''){
        emptys = [
            ...emptys,
            'price'
        ]
    }
    if ( quantity === ''){
        emptys = [
            ...emptys,
            'quantity'
        ]
    }
    if ( img2.length === 0){
        emptys = [
            ...emptys,
            'image'
        ]
    }
    if ( description === ''){
        emptys = [
            ...emptys,
            'description'
        ]
    }

    return emptys;
   
}