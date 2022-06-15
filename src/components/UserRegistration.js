import React, {useState} from 'react'

const UserRegistration = () => {

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
        props.handleRegistration(newUser)
    }

    return (
        <>
            <h3> New User Registration </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username: </label>
                <input type="text" name="username"/><br/>

                <label htmlFor="email"> Email: </label>
                <input type="email" name="email"/><br/>

                <label htmlFor="password"> Password: </label>
                <input type="text" name="password"/><br/>

                <label htmlFor="first_name"> First Name: </label>
                <input type="text" name="first_name"/><br/>

                <label htmlFor="last_name"> Last Name: </label>
                <input type="text" name="last_name"/><br/>

                <input type="submit">
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
