import React, { Component } from 'react';
import CustomBuildSwiper from './swiper'
import * as firebase from 'firebase/app';
import 'firebase/database';
import axios from "axios"

class Project2 extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            data:null
          };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.updateStarCount = this.updateStarCount.bind(this)
    }
    increment() {
        this.setState({
          count: this.state.count + 1
        });
      };
      
      decrement() {
          if(!this.state.count == 0)
        this.setState({
          count: this.state.count - 1
        });
      };

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
    firebase.initializeApp(firebaseConfig);
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
  })
}
      componentDidMount(){
          this.getFirebaseData()
        var swiper = new window.Swiper('.swiper-container', {
            spaceBetween: 30,
            //effect: 'fade',
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

render(){ 
    let self = this;
    if(!this.state.data){
      return <div className="temp-preloader"><img src={"/images/preloader.gif"} alt="" /></div>
    }
    console.log("data",this.state.data)
    let data = self.state.data
    return <div class="container" style={{width:'100%'}}>
      <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src='images/image-2x1.png' alt=""/></div>
      <div class="swiper-slide"><img src='images/image-2x1.png' alt=""/></div>
      <div class="swiper-slide"><img src='images/image-2x1.png' alt=""/></div>
    </div> 
    <div class="swiper-pagination"></div>
  </div>
       
  <div class="bounce upperSide">
        <p>{data.bodyContent}</p>
    </div>
  <div class="bounce">
        <p>{data.footerContent}</p>
    </div>
      </div>   
  
}
}
export default Project2;