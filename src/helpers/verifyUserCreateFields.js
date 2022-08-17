

export const verifyUserCreateFields = (user) => { 

    const { name, role, email, password } = user;

    let emptys = [];

    if (name === '') {
        emptys = [
            ...emptys,
            'name'
        ]
    }
    if (role === '') {
        emptys = [
            ...emptys,
            'role'
        ]
    }
    if (email === '') {
        emptys = [
            ...emptys,
            'email'
        ]
    }


    if (password === '') {
        emptys = [
            ...emptys,
            'password'
        ]
    }
    else if (password.length <= 6) {
        emptys = [
            ...emptys,
            'password most be at less of 6 characters'
        ]
    }




    return emptys;

}