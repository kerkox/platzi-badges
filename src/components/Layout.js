import React from 'react'
import NavBar from './Navbar'

function  Layout (props){
  // const children  = props.children;
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
    );
}

export default Layout