import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import LogoTransparent from '../../LogoTransparent.png';
import {auth, provider} from "../../firebase";
import {actionTypes} from "../../reducer";
import {useStateValue} from "../../StateProvider"

function Login() {
    
const logo = document.querySelectorAll("#logo path");
for (let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
   const [state, dispatch] =useStateValue();

    const signIn = () =>{


//sign in
auth
.signInWithPopup(provider)
.then((result)=>{
    dispatch({ 
        type: actionTypes.SET_USER,
        user: result.user,
    })
  
})
.catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <br>
            </br>
            <div className="login__logo">
            <svg id="logo" width="248" height="77" viewBox="0 0 248 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.5773 1.40618H55.5773V2.40618V53.6781L15.2057 1.79209L14.9055 1.40618H14.4165H2.09484H1.09484V2.40618V75V76H2.09484H14.4165H15.4165V75V24.9221L54.7481 75.613L55.0483 76H55.5381H68.7505H69.7505V75V2.40618V1.40618H68.7505H56.5773Z" stroke="white" strokeWidth="2"/>
<path d="M158.163 2.40618V1.40618H157.163H106.095H105.095V2.40618V75V76H106.095H158.351H159.351V75V63.4206V62.4206H158.351H119.416V44.9732H153.155H154.155V43.9732V33.1361V32.1361H153.155H119.416V14.8371H157.163H158.163V13.8371V2.40618Z" stroke="white" strokeWidth="2"/>
<path d="M186.235 13.5402V14.5402H187.235H226.34L185.125 64.8654L184.899 65.1417V65.499V75V76H185.899H245.874H246.874V75V63.7175V62.7175H245.874H204.843L246.053 12.5419L246.28 12.2652V11.9072V2.40618V1.40618H245.28H187.235H186.235V2.40618V13.5402Z" stroke="white" strokeWidth="2"/>
</svg>








            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign in 
                </Button>
        </div>
    )
}

export default Login
