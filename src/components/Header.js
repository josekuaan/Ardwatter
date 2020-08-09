import React from 'react'

export default function Header() {
    return (
        <header>
            <div id="head">
                <div className="contact-bar">
                    <ul style={{width: '40%'}}>
                        <li><i className="fal fa-phone-alt"></i>  +2349035596977</li> 
                        <li>&#124;</li>
                        <li><i className="fal fa-envelope"></i>  ardwatterdigital@gmail.com</li> 
                        <li>&#124; </li>
                        <li><i className="fal fa-alarm-clock"></i>  Mon - Sat 8.00am - 6.00pm</li>
                    </ul>
                    <ul style={{width: '12%'}}>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <nav id="navBar">
                    <p><a href="#">ARDWATTER</a></p>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#services">SERVICE</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#contact">CONTACT US</a></li>
                    </ul>
                </nav>
                <div className="hero-text">
                    <div className="hero-text-caption"><h2>start up your business with us</h2></div>
                    <p style={{color: 'rgb(231 230 230)',margin: '1rem 0 1rem' }}>Our passion is to holistically build thriving and cost-effective businesses by progressively leveraging on cutting-edge models.</p>
                    <p style={{padding: '.7rem 0' }}>    
                       <a className='btn btn-read' href='#about'>Read More</a>
                    </p>
                   
                </div>
            </div>
        </header>
    )
}
