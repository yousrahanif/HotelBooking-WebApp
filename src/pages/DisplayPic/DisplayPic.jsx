import React from 'react';
import hotel from '../../images/hotel.jpg'

const DisplayPic = () => {
    return (
        <div>
            
            <div>
            <img className='object-fill h-96 w-screen' src={hotel} alt="" />
            </div>
        </div>
    );
};

export default DisplayPic;