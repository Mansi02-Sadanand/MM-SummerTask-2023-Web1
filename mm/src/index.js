import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from './components/Navbar';
import InstagramIcon from '@mui/icons-material/Instagram';


function Greet(){
  
  return (
     <>
  <Navbar/>
  
    {/* <footer className='footer'>
      <InstagramIcon/>
    </footer> */}
  </>
  );}

ReactDOM.render(<Greet/>,document.getElementById('root'));

// jsx rules 
// always return single element  fragment:<></>
// use of camelcase
// classsName instead instead of class
// close every element eg-- <img src='' alt=''/>

// starting tag should be in same line as the retrun keyword otherwise  it will show error 
// if u use parenthesis after return then u dont need to  worry about the position of starting tag
