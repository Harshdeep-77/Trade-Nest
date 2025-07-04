import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt='awards'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million TradeNest client contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and options</li>
                                <li> Commodity derivation</li>
                                <li> Currency derivation</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                              <ul>
                                <li>Stocks & TPOs </li>
                                <li>  Direct mutual funds</li>
                                <li>  Bonds and Govt. Securites</li>
                            </ul>
                        </div>
                    </div>
                     <img src='media\pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;