import React from 'react'
import client2 from '../images/client2.jpg'
import client3 from '../images/client3.jpg'
import client4 from '../images/client4.jpg'

export default function Testimony() {
    return (
        <section className="containers testimony">
            <h2>What Our Fantastic Clients Say</h2>
            <div style={{padding: '4rem 0'}}>
           <div className=" clients">
               <div className="testimony-content">
                        <div className="img-content">
                            <div className="img-cont">
                                <img src={client2} alt="..." />
                                </div>
                                <span >Mr Ifeanyi</span>
                        </div>
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                
               <div className="testimony-content">
                        <div className="img-content">
                            <div className="img-cont">
                                <img src={client3} alt="..." />
                            </div>
                            <span style={{ textAlign: 'left'}}>Mr Ifeanyi</span>
                        </div>
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
               <div className="testimony-content">
                        <div className="img-content">
                            <div className="img-cont">
                                <img src={client4} alt="..." />
                            </div>
                            <span>Mr Ifeanyi</span>
                        </div>
                    
                   <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
               </div>
            </div>
         </div>
    </section>
    )
}
