import React  from 'react'
import Header from '../HeaderComponent/Header';
import Rain from '../../components/assets/rain.mp4';
import Sound from '../../components/assets/rain.mp3';
import Beach from '../../components/assets/beachv.mp4'
import Sonido from '../../components/assets/beachs.mp3'
import Sea from '../../components/assets/sea.mp4'
import "./Relax.css";



function Relax() {

// state = { advice: '' };
    
// componentDidMount() {
//  console.log('COMPONENT DID MOUNT')
// }
    
    return ( 
        
        <div className="rheader">
            <Header/>
        <video autoPlay loop style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top:"50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}>
          <source src={Sea} type="video/mp4"/>
        </video>
{/* 
         <audio autoPlay loop>
        <source src={Sonido} type="audio/mp3"/>
        </audio>  */}





 



        </div>
    )
}

export default Relax
