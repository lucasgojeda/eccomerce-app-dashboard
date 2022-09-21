

export const verifyProductFields = ( product, img2 ) => { 

    const { category, name, price, quantity, description } = product;

    let emptys = [];

    if ( category.name === ''){
        emptys = [
            ...emptys,
            'categoria'
        ]
    }
    if ( name === ''){
        emptys = [
            ...emptys,
            'nombre'
        ]
    }
    if ( price === ''){
        emptys = [
            ...emptys,
            'precio'
        ]
    }
    if ( quantity === ''){
        emptys = [
            ...emptys,
            'cantidad'
        ]
    }
    if ( img2.length === 0){
        emptys = [
            ...emptys,
            'imagen'
        ]
    }
    if ( description === ''){
        emptys = [
            ...emptys,
            'descripción'
        ]
    }

    return emptys;
   
}