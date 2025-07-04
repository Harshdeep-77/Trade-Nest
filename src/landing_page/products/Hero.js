import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center mb-5'>
                <h1 className='text-center mt-5 ' style={{fontWeight:"500",fontSize:"60px"}}>TradeNest Products</h1>
                <p className='fs-3 mt-3'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-4 mb-5'>Check out our <a href=''style={{textDecoration:"none"}}>investment offerings →</a> </p>
            </div>
        </div>
     );
}

export default Hero ;