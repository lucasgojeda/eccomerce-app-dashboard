

export const prepareProducts = (products) => {

    return new Array(products.map(
        e => ({
            id: e._id,
            name: e.name,
            price: e.price,
            category: e.category.name,
            quantity: e.quantity,
            description: e.description,
            user: e.user.name,
            img: e.img
        })
    ))
}