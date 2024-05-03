import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <>
       <div className='signup-account'>
        <div className='signup-input'>
        <label htmlFor="username" className='fname'>First Name: </label>
        <input
          type="text"
          id="fname"
          className='fname_input'
        //   value={username}
        //   onChange={(e) => setUsername(e.target.value)}
          required
        />
         <label htmlFor="username" className='Sname'>Last Name:</label>
        <input
          type="text"
          id="Sname"
          className='Sname_input'
        //   value={Sname}
        //   onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <label htmlFor="password" className='email'>Email:</label>
         <input
          type="Email"
          placeholder='example123@gmail.com'
          className='email_input'
        //   value={password}
        //   onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>

                    {/******** PASSWORD ********/}
        <label htmlFor="password" className='pass'>Password:</label>
         <input
          type="password"
          className='password'
        //   value={password}
        //   onChange={(e) => setUsername(e.target.value)}
          required
        /><br/><br/>
         <label htmlFor="Cpassword" className='cpass'>Password:</label>
        <input
          type="password"
          className='cpassword'
        //   value={cpass}
        //   onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/><br/>
        <button type="submit" className='Signup'>SignUp</button><br/>
        Already Have Account
        </div>
        </div>
    </>
 
  )
}

export default LoginForm
