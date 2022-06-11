import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
import './Notfound.css'
const NotFound = () => {
   
    return (
        <div className='notfound '>
            
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  

            <h2 className='pt-5'>4O4</h2>
            <h3>Page not found</h3>
            <br />
            <Link to="/home"> <Button variant="flat" size="xxl">
    Go Back
  </Button></Link>
            <div className=' mt-5 pb-3'>
                <img style={{width:'50%',height:'500px'}} src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound; 