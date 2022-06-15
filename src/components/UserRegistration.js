import React, {useState} from 'react'

const UserRegistration = (props) => {

    const emptyUser = {
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        staff: false
    }

    const [newUser, setNewUser] = useState(emptyUser)

    const handleChange = (event) => {
      setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(newUser);
        props.handleRegistration(newUser)
    }

    return (
        <>
            <h3> New User Registration </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username: </label>
                <input type="text" name="username" onChange={handleChange}/><br/>

                <label htmlFor="email"> Email: </label>
                <input type="email" name="email" onChange={handleChange}/><br/>

                <label htmlFor="password"> Password: </label>
                <input type="text" name="password" onChange={handleChange}/><br/>

                <label htmlFor="first_name"> First Name: </label>
                <input type="text" name="first_name" onChange={handleChange}/><br/>

                <label htmlFor="last_name"> Last Name: </label>
                <input type="text" name="last_name" onChange={handleChange}/><br/>

                <input type="submit"/>
            </form>
        </>
    )

}

export default UserRegistration



//sample user
// {
//     "id": 6,
//     "username": "testuser2",
//     "email": "testuser2@email.com",
//     "password": "testpassword",
//     "first_name": "test",
//     "last_name": "user2",
//     "staff": false
// }
