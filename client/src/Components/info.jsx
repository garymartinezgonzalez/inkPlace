import React, { Component } from 'react';
// RHL only for front end development


const Info extends Component{
  constructor(props){
    super(props);
    this.state = {
      Info:[]
    }
  }

  getData(url = '/styles') {
   return fetch(url)
     .then(response => response.json())
     .then(results => {
       this.setState({
         Info: results,
       });
     })
     .catch(err => console.error(err));
 }

componentDidMount() {
   this.getData();
 }
 render(){
   return(

     <h1> hello </h1>
   )
 }
}

export default Info;
