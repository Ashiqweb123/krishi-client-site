import React from 'react';
import image5 from '../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
      <img 
        src={image5} 
        alt="Error"
        className="w-80 md:w-96"
      />
    </div>
    );
};

export default ErrorPage;