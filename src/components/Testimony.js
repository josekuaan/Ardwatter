import React from 'react'
import client1 from '../images/client1.jpg'

export default function Testimony() {
    return (
        <section className="container">
           <h2>10k Experts Trust Us</h2>
           <div>
            <div className="testimony-background"></div>
            <div className="testimony-container">
                <div className="testimony-content">
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    <div className="img-container">
                        <div className="img-content">
                            <img src={client1} alt="..." />
                        </div>
                        <div className="client-details">
                            <h4>Mr Ifeanyi</h4>
                            <div>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimony-content">
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    <div className="img-container">
                        <div className="img-content">
                            <img src={client1} alt="..." />
                        </div>
                        <div className="client-details">
                            <h4>Mr Ifeanyi</h4>
                            <div>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimony-content">
                    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    <div className="img-container">
                        <div className="img-content">
                            <img src={client1} alt="..." />
                        </div>
                        <div className="client-details">
                            <h4>Mr Ifeanyi</h4>
                            <div>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </section>
    )
}
