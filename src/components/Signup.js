import React, {Component} from 'react';

class Signup extends Component{
    render(){
        return(
            <div className = 'containerPrincipal'>

                <h1 className = 'titulo'>Sing Up into our community</h1>
                <p>You look exactly like someone who is in trends, you'r in!</p>
               
                <div className = 'googleButton'>
                        <button className = 'btn btn-primary' type = 'submit'>Continue with Google</button>
                </div>
                
                <h6> ------------ or Sign in with Email ------------ </h6>
                                
                <div className = 'form-group'>
                    
                    <div className ='mb-3'>
                        <label for = 'mail' className='form-label'>Email</label>
                        <input type = 'text' className='form-control' id='mail' name='mail' required></input>
                    </div>
                    
                    <div className ='mb-3'>
                        <label for = 'username' className='form-label'>Username</label>
                        <input type = 'text' className='form-control' id='user' name='user' required></input>
                    </div>

                    <div className ='mb-3'>
                        <label for = 'password' className='form-label'>Password</label>
                        <input type = 'password' className='form-control' id='password' name='password' required></input>
                    </div>

                    <div className ='mb-3'>
                        <label for = 'password' className='form-label'>Repeat Password</label>
                        <input type = 'password' className='form-control' id='password' name='password' required></input>
                    </div>

                    <div className='ConfirmButton'>
                        <button className = 'btn btn-primary' type = 'submit'>Confirm</button>
                    </div>
               
                </div>

            </div>
        )
    }
}

export default Signup;