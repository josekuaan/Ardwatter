import React from 'react'
import client2 from '../images/client2.jpg'
import client3 from '../images/client3.jpg'
import client4 from '../images/client4.jpg'

export default function Testimony() {
    return (
        <section className="testimony">
            <h2 style={{paddingTop: '4rem',color:'#ffffff'}}>What others say</h2>
            <div style={{padding: '4rem 0'}}>
           <div className="container clients">
               <div className="testimony-content">
                  <div className="img-container">
                        <div className="img-content">
                            <div className="img-cont"><img src={client2} alt="..." /> <span style={{marginTop: '1rem'}}>Mr Ifeanyi</span></div>
                           
                        </div>
                    </div>
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                
               <div className="testimony-content">
                   <div className="img-container">
                        <div className="img-content">
                            <div className="img-cont"><img src={client3} alt="..." /><span style={{marginTop: '1rem'}}>Mr Ifeanyi</span></div>
                            
                        </div>
                    </div>
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
               <div className="testimony-content">
                    <div className="img-container">
                        <div className="img-content">
                            <div className="img-cont"><img src={client4} alt="..." /><span style={{marginTop: '1rem'}}>Mr Ifeanyi</span></div>
                            
                        </div>
                    </div>
                   <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    
                </div>
           </div>
           </div>
        </section>
    )
}
