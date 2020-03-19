import React, { Component } from 'react';
import CustomBuildSwiper from './swiper'
import * as firebase from 'firebase/app';
import 'firebase/database';
import axios from "axios"
var swiper;
class Project2 extends React.Component { 
    constructor(props){
        super(props)
        this.state = { 
            data:null
          };  
    }
 

 getFirebaseData(page, callback) {
  let self = this;  
    var firebaseConfig = {
      apiKey: "AIzaSyAfQ-LCI3jUEtvkPsCDh5UerAX1VUfZLgw",
      authDomain: "reactpro-7e53b.firebaseapp.com",
      databaseURL: "https://reactpro-7e53b.firebaseio.com",
      projectId: "reactpro-7e53b",
      storageBucket: "reactpro-7e53b.appspot.com",
      messagingSenderId: "571619637921",
      appId: "1:571619637921:web:d1f7cced7aaa2a9a804ee0",
      measurementId: "G-0RTB99HY1L"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
 //   firebase.analytics();
    var ref = firebase.app().database().ref();
    ref.once("value").then(function (snap) {
      self.updateStarCount(snap.val()) 
    console.log("snap.val()", snap.val());
    }); 
    
}
updateStarCount(data){
  let self = this;  
  self.setState({
    data:data
  },function(){
    self.slider()
  })
}
slider(){
  swiper = new window.Swiper('.swiper-container', {
    spaceBetween: 30,
    //effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        //clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
}
      componentDidMount(){
          this.getFirebaseData()
         
      }

render(){ 
    let self = this;
    let styleData = `
    img.img-style {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
  }
    `
    if(!this.state.data){
      return <div className="temp-preloader"><img src={"/images/preloader.gif"} alt="" /></div>
    }
    console.log("data",this.state.data)
    let data = self.state.data
    let slider = self.state.data.gallery.map(function(v){ 
      return <div class="swiper-slide"><img src='images/image-1x1.png' alt="" style={{ backgroundImage: 'url(' + v + ')' }} className='img-style'/></div>
    }) 
    return <div class="container" style={{width:'100%'}}>
    <style>{styleData}</style>
      <div class="swiper-container">
    <div class="swiper-wrapper">
      {slider} 
    </div> 
    <div class="swiper-pagination"></div>
  </div>
       
  <div class="bounce upperSide">
        <p>{data.mainContent.bodyContent}</p>
    </div>
  <div class="bounce">
        <p>{data.mainContent.footerContent}</p>
    </div>
      </div>   
  
}
}
export default Project2;