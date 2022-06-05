import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
import './Notfound.css'
const NotFound = () => {
   
    return (
        <div className='notfound '>
            <h2 className='pt-5'>4O4</h2>
            <h3>Page not found</h3>
            <br />
            <Link to="/home"> <button className="btn btn-success ">Go back</button></Link>
            <div className=' mt-5 pb-3'>
                <img style={{width:'50%',height:'500px'}} src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound; 