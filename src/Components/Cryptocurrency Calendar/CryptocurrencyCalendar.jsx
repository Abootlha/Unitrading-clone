import React, { useState, useEffect } from 'react';
// import Loader from './Loader.jsx';
// import './Crypto.js'
import './crypto.css'
import AuthenticationHeader from './../Header/AuthenticatedHeader.jsx'

function CryptocurrencyCalendar() {

  useEffect(() => {
    // Call the provided function when the component mounts
    (function(w,d,t,h,l,b,p,o,a,m){
        w['TraducationFxObject'] = o;
        w[o] = w[o] || function(){
            w[o].h = h;
            w[o].b = b;
            return (w[o].q = w[o].q || []).push(arguments);
        };
        a = d.createElement(t);
        m = d.getElementsByTagName(t)[0];
        a.async = 1;
        a.src = h + l + '?b=' + b + '&p=' + p.join(',');
        a.crossorigin = 'use-credentials';
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://embedder.traducationfx.com/', 'embedder.js', 'Y0UT3D8srRZ', ['modal'], 'TraducationFX');
    
    TraducationFX('settings', 'configure', {
        langCode: 'en',
        traderStateKey: 'eP7gFXypBzC'
    });
    TraducationFX('cryptoCalendar', 'configure', {
        containerId: 'crypto-calendar'
    });
    TraducationFX('cryptoCalendar', 'embed');
    TraducationFX('plugin.modal.eventLocked', 'configure', {
        body: 'Upgrade to gain access.',
        primaryButton: {
            text: 'Upgrade',
            link: '/#packages'
        }
    });
}, []);

    
  return (
    <>
     {/* <AuthenticationHeader/> */}

        <div className='text'>
            <h1 className='text-crypto'>Cryptocurrency Calendar</h1>
        </div>
        
        <div class="crypto-container">
    <div id="crypto-calendar" class='crypto'></div>
    <div class="trfx-calendar-star-wrapper trfx-calendar-fixed-width">
        <span class="trfx-calendar-icon-star"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FFBF68"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>
        <span class="trfx-calendar-icon-star"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FFBF68"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>
        <span class="trfx-calendar-icon-star"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#E7E7E7"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>
    </div>
</div>
    
    </>
  )
}

export default CryptocurrencyCalendar