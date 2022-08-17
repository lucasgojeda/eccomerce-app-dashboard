

export const verifyUserEditFields = ( user ) => { 

    const { name, role, email } = user;

    let emptys = [];

    if ( name === ''){
        emptys = [
            ...emptys,
            'name'
        ]
    }
    if ( role === ''){
        emptys = [
            ...emptys,
            'role'
        ]
    }
    if ( email === ''){
        emptys = [
            ...emptys,
            'email'
        ]
    }


    return emptys;
   
}