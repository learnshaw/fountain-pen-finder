import React from 'react';
import '../App.css';

function SignUp() {

    return(
        <div>


    <p className='about'>Sign up below to be the first to know when the system is launched</p>
        <form action="http://www.focuspocus.io/magic/cad347fd65ed789d83db30221d33830b" method="POST">
            <fieldset className="email-input-flex">
                <input className ="email-input" type="email" name="email" id="email" required="true" placeholder="email address" />
                <input className="subscribe-button" type="submit" value="subscribe"/>
                {/* <label for="email" className="visuallyhidden">email address</label> */}
            </fieldset>     
        </form>


</div>
        );
}

export default SignUp;
