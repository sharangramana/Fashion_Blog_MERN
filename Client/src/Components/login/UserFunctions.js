import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:5000/users/register', {
            First_name: newUser.First_name,
            Last_name: newUser.Last_name,
            Email: newUser.Email,
            Mob_number: newUser.Mob_number,
            Password: newUser.Password,
        })
        .then(res => {
            console.log("Registered!!")
        })
}

export const login = user =>  {
    return axios
    .post('http://localhost:5000/users/login', {
        Email: user.Email,
        Password: user.Password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
