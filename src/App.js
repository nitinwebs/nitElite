import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Project2 from './project2'


class App extends Component {
  render() {
    return ( 
      <Project2/>
    //  <div id="colorlib-page">
     
    //     <div id="container-wrap">
    //      	<Sidebar></Sidebar>
		// 		<div id="colorlib-main">
		// 			<Introduction></Introduction>
		// 			<About></About>
		// 			<Timeline></Timeline>
    //       	</div>
    //   	</div>  
    //   </div>
    );
  }
}

export default App;
