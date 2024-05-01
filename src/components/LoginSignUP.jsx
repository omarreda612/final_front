import React from 'react'
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './LoginSignUP.css'
export default function LoginSignUP() {
    const [action , setAction]=useState('login')
    const registerLink =()=>{
        setAction('active')
    };
    const loginLink =()=>{
        setAction('')
    };
  return (
    <div className='container'>
            <div className={`wrapper'${action}`}>
                <div className='form-box login'>
                    <form action=''>
                        <h1>Registeration</h1>
                        <div className='input-box'>
                            <input type='email' placeholder='Email'  required/>
                            <MdEmail className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type='text' placeholder='Username'  required/>
                            <FaUser className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' required/>
                            <FaLock className='icon'/>
                        </div>
                        <div className='remember-forgot'>
                            <label><input type='checkbox'/>Remember me</label>
                            <a href='/'>Forgot password?</a>
                            
                        </div>
                        <button type='submit' className='btn'>Login</button>
                        <p>Dont have an account? <a href='/' onClick={registerLink}>Register</a></p>
                    </form>
                </div>

                <div className='form-box register'>
                    <form action=''>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type='email' placeholder='Email' required/>
                            <MdEmail className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' required/>
                            <FaLock className='icon'/>
                        </div>
                        <div className='remember-forgot'>
                            <label><input type='checkbox'/>I agree to terms and conditions</label>
                            
                        </div>
                        <button type='submit' className='btn'>Register</button>
                        <div className='register-link'>
                            <p>Already have an account? <a href='/' onClick={loginLink}>Login</a></p>
                        </div>
                    </form>
                </div>

            </div>

        </div>
  )
}
