import React, { Component } from 'react';

class Project1 extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            count: 0
          };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
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

render(){
    console.log("state",this.state.count)
    let self = this;
    return <div class="container">
    <div class="row">
    <div class="col s6">   <div class="card sticky-action">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://materializecss.com/images/office.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p>
        <span class="new badge">{self.state.count}</span> 
        <a class="waves-effect waves-light btn-small" onClick={this.increment}>Like Me</a> 
        <a class="waves-effect waves-light btn-small red" onClick={this.decrement}>Unlike Me</a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
 </div>

  <div class="col s6">   <div class="card sticky-action">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://materializecss.com/images/office.jpg"/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p>
        <span class="new badge">{self.state.count}</span> 
        <a class="waves-effect waves-light btn-small" onClick={this.increment}>Like Me</a> 
        <a class="waves-effect waves-light btn-small red" onClick={this.decrement}>Unlike Me</a>
      </p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
 </div>

 
   
        </div>
      </div>   
  
}
}
export default Project1;