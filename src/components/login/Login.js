import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';
import { loginPOST } from '../../api/apiFetch';
import { customContext } from '../../context/AppContext';
import imageLogin from './panasignuoimage.jpg'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const {setAuth, setToken, auth} = useContext(customContext)
    const navigate = useNavigate()

    useEffect(()=> {
        if(auth){
            navigate('/')
        }

    },[auth])
    
    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const body = {email, password}
        console.log(body)
        loginPOST(body)
        .then(res => res.json())
        .then((res)=>{
            console.log(res)
            if(!res.error){
                setAuth(true)
                setToken(res.access_token)
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: "We can't login succefully. Please try again later!",
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            }
            
        })
        .catch((err)=>{
            Swal.fire({
                title: 'Error!',
                text: "We can't login succefully. Please try again later!",
                icon: 'error',
                confirmButtonText: 'Ok'
              })
              console.error("Error:",err)
        })
        
    }
        return(
            <div className = 'containerPrincipal container d-flex justify-content-center'>
                {
                    isLoading?
                    <div className="d-flex justify-content-center mt-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                
                <div>
                    <div className='imageLogin'>
                    <img src={imageLogin} alt='loginImage'/>
                </div>
            
                <h1 className = 'titulo'>Login to your Account</h1>
                <p>Look some inspiration?</p>
               
                <div className = 'googleButton'>
                        <button className = 'btn btn-primary' type = 'submit'>Continue with Google</button>
                </div>
                
                <h6> ------------ or Sign in with Email ------------ </h6>

                <div className = 'form-group'>
                 {/* <form action="" onsubmit="return " > */}
                    <div className ='mb-3'>
                        <label htmlFor = 'email' className='form-label'>Email</label>
                        <input type = 'text' className='form-control' id='email' name='email' onChange={(e)=> setEmail(e.target.value)} required></input>
                    </div>

                    <div className ='mb-3'>
                        <label htmlFor = 'password' className='form-label'>Password</label>
                        <input type = 'password' className='form-control' id='password' name='password'onChange={(e)=> setPassword(e.target.value)} required></input>
                    </div>
                
                {/*</form>*/}

                    <div className='ConfirmButton'>
                        <button className = 'btn btn-primary' onClick ={handleLogin}>Login</button>
                    </div>
               
                </div>

                <h4> Not Registered Yet? <Link to = '/signup'>Create an account</Link> </h4>
                </div>
                
                
                }
            </div>
        )
}

export default Login;