import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
    render(){
        return(

            <div className = 'containerPrincipal'>

                <div className='imageLogin'>
                    <img src='C:/Users/57311/idforideas/src/images/panasignuoimage.jpg' alt=''/>
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
                        <label for = 'username' className='form-label'>Email or username</label>
                        <input type = 'text' className='form-control' id='user' name='user' required></input>
                    </div>

                    <div className ='mb-3'>
                        <label for = 'password' className='form-label'>Password</label>
                        <input type = 'password' className='form-control' id='password' name='password' required></input>
                    </div>
                
                {/*</form>*/}

                    <div className='ConfirmButton'>
                        <button className = 'btn btn-primary' type = 'submit'>Login</button>
                    </div>
               
                </div>

                <h4> Not Registered Yet? <Link to = '/Registration'>Create an account</Link> </h4>

            </div>
        )
    }
}

export default Login;