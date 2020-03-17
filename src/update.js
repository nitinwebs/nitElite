import React, { Component } from 'react';
import CustomBuildSwiper from './swiper'
import * as firebase from 'firebase/app';
import 'firebase/database';
import axios from "axios"

class Update extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            count: 0,
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
  })
}
      componentDidMount(){
          this.getFirebaseData() 
      }

  updateData(){
    var bodyContent = document.getElementById('bodyContent').value.toString();
  var footerContent = document.getElementById('footerContent').value.toString(); 
  
    
    var firebaseRef = firebase.database().ref().child("mainContent"); 

    firebaseRef.child("bodyContent").set(bodyContent);
    firebaseRef.child("footerContent").set(footerContent);
  //  var userEmail = bodyContent.value + " " + footerContent.value; 
  //  firebaseRef.push().set(userEmail); 
  }
render(){ 
    let self = this;
  //  return <h1>Nitin</h1>
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
        
  <textarea defaultValue={data.mainContent.bodyContent} id="bodyContent"></textarea> 
  <textarea defaultValue={data.mainContent.footerContent} id="footerContent"></textarea>   
  <button onClick={self.updateData}>Submit</button>
      </div>   
  
}
}
export default Update;