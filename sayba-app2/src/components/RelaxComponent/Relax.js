import React  from 'react'
import Header from '../HeaderComponent/Header';
import Rain from '../../components/assets/rain.mp4';
import Sound from '../../components/assets/rain.mp3';
import Beach from '../../components/assets/beachv.mp4'
import Sonido from '../../components/assets/beachs.mp3'
import Sea from '../../components/assets/sea.mp4'
import axios from 'axios';


import "./Relax.css";


class Relax extends React.Component{

state = {advice:''}

componentDidMount(){
   this.fetchAdvice();
}


fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')

    .then ((response) => {
        const { advice } = response.data.slip;
        this.setState ({ advice });
    })

    .catch ((error) => {
       console.log(error);
    })



}




    render() {
        const { advice } = this.state;
return(


    <div className="rheader">
    <Header/>
<video autoPlay loop style={{
    position: "absolute",
    width: "100%",
    left: "50%",
    top:"50%",
    height: "130%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1"
}}>
  <source src={Sea} type="video/mp4"/>
</video>

  <audio autoPlay loop>
<source src={Sonido} type="audio/mp3"/>
</audio>  

<div className="apps">
<div className="cards">
<h2 className="headings">{advice}</h2>
<button className="button" onClick={this.fetchAdvice}>
    <span>Advice</span>
</button>
</div>
</div>



</div>


);

}

}


export default Relax
