import React, {useState} from 'react'

const UserRegistration = (props) => {

  //State:
    const emptyUser = {
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        staff: false
    }

    const [newUser, setNewUser] = useState(emptyUser)
    const [login, setLogin] = useState(true)



  //Functions:
    const loginToggle = () => {
      if (login === false) {
        setLogin(true)
      } else {
        setLogin(false)
      }
    }

    const handleChange = (event) => {
      setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(newUser);
        if (login) {
            userObj = {
                username: newUser.username,

            }
            props.handleSignIn()
        } else {
            props.handleRegistration(newUser)
        }
    }

    return (
      <>
        <button onClick={props.signInToggle} className="search-btn">Sign In</button>
        {props.showSignIn ?
          <>
            <div className="modal-wrapper">
              <div className="create-acc-si-modal">
                <div className='create-acc-si-x-btn-div'>
                  <button className='create-acc-si-x-btn' onClick={props.signInToggle}>
                  x
                  </button>
                </div>
                {login ?
                  <>
                    <h3>Sign In</h3>
                    <div className="create-acc-si-div">
                      <form onSubmit={handleSubmit}>
                          <label htmlFor="username"> Username: </label>
                          <input type="text" name="username" onChange={handleChange}/>
                          <br/>
                          <br/>

                          <label htmlFor="password"> Password: </label>
                          <input type="passowrd" name="password" onChange={handleChange}/>
                          <br/>
                          <br/>
                          <div className='add-submit-btn-div'>
                            <input type='submit'/>
                          </div>
                        </form>
                      </div>
                    <div className="account-toggle-btn">
                      <button onClick={loginToggle}>Create Account</button>
                    </div>
                  </>
                  :
                  <>
                    <h3> New User Registration </h3>
                    <div className="create-acc-si-div">
                      <form onSubmit={handleSubmit}>
                          <label htmlFor="username"> Username: </label>
                          <input type="text" name="username" onChange={handleChange}/>
                          <br/>
                          <br/>

                          <label htmlFor="email"> Email: </label>
                          <input type="email" name="email" onChange={handleChange}/>
                          <br/>
                          <br/>

                          <label htmlFor="password"> Password: </label>
                          <input type="text" name="password" onChange={handleChange}/>
                          <br/>
                          <br/>

                          <label htmlFor="first_name"> First Name: </label>
                          <input type="text" name="first_name" onChange={handleChange}/>
                          <br/>
                          <br/>

                          <label htmlFor="last_name"> Last Name: </label>
                          <input type="text" name="last_name" onChange={handleChange}/>
                          <br/>
                          <br/>

                          <div className='add-submit-btn-div'>
                            <input type='submit'/>
                          </div>
                      </form>
                      <div className="account-toggle-btn">
                        <button onClick={loginToggle}>Already have an account? Login</button>
                      </div>
                    </div>
                  </>
                }
              </div>
            </div>
          </>
        : null}
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
