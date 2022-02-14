import React, { useState } from 'react';
import { registerPOST } from '../../api/apiFetch';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [confirmation, setConfirmation] = useState(false)
    const [name, setName]= useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleRegister = (e) =>{
        e.preventDefault();
        if(password !== passwordConfirm){
            setConfirmation(true)
        }else{
            setIsLoading(true)
            setConfirmation(false)
            const body = {"name": name, 
                "email":email,
                "password": password}
            console.log(body)
            registerPOST(body)
            .then(res => res.json())
            .then(res =>{
                console.log(res)
                if (!res.error){
                    Swal.fire({
                        title: 'Success!',
                        text: 'You are succefully registered, wait for login redirection!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    navigate('/login')
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error in registration. Please try again later!',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                      console.error(res.error)
                }
                
            })
            .catch(res => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error in registration. Please try again later!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }
        
    }

        return(
            <div className = 'containerPrincipal'>
                {
                    isLoading ?
                    <div className="d-flex justify-content-center mt-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <h1 className = 'titulo'>Sing Up into our community</h1>
                <p>You look exactly like someone who is in trends, you'r in!</p>
               
                <div className = 'googleButton'>
                        <button className = 'btn btn-primary' type = 'submit'>Continue with Google</button>
                </div>
                
                <h6> ------------ or Sign in with Email ------------ </h6>
                                
                <div className = 'form-group'>
                    
                    <div className ='mb-3'>
                        <label htmlFor = 'email' className='form-label'>Email</label>
                        <input type = 'text' className='form-control' onChange={(e)=>setEmail(e.target.value)} name='email' required></input>
                    </div>
                    
                    <div className ='mb-3'>
                        <label htmlFor = 'name' className='form-label'>Username</label>
                        <input type = 'text' className='form-control' id='name' name='name' onChange={(e)=>setName(e.target.value)} required></input>
                    </div>

                    <div className ='mb-3'>
                        <label htmlFor = 'password' className='form-label'>Password</label>
                        <input type = 'password' className='form-control' id='password' name='password' onChange={(e)=>setPassword(e.target.value)} required></input>
                    </div>

                    <div className ='mb-3'>
                        <label htmlFor = 'passwordConfirm' className='form-label'>Repeat Password</label>
                        <input type = 'password' className='form-control' id='passwordConfirm' name='passwordConfirm' onChange={(e)=>setPasswordConfirm(e.target.value)} required></input>
                    </div>
                    {
                        confirmation &&
                        <p>Passwords doesn't match</p>
                    }

                    <div className='ConfirmButton'>
                        <button className = 'btn btn-primary' onClick={handleRegister} >Confirm</button>
                    </div>
               
                </div>
                    </>
                }
            </div>
        )
    }

export default Signup;