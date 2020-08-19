import React, {useState} from 'react'
import ardwatter from '../images/ardwatter.png'

export default function Contact() {
    const [user,setUserData]= useState({name:'',email:'', phone:'',subject:'', message:''})

    const handleChange=(e)=>{
        e.preventDefault()
         const { name,value}= e.target
         console.log(name,value)
         setUserData(prevState =>({...prevState,[name]:value}))
      
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
    }
    return (
        <>
            <div className="contact-footer-content">
                <div className=" containers">
                <div className="footer-content">
                <ul>
                    <li>Support</li>
                    <li>+2349035596977</li>
                    <li style={{fontSize: '.9rem'}}>mail@ardwatter.com</li>
                    <li style={{fontSize: '.9rem'}}>24 HOURS A DAY</li>
                    {/* <li></li> */}
                </ul>
                    <ul>
                        <li>Follow Us</li>
                        <li>SOCIAL MEDIA CHANNELS</li>
                        <li className="media-icon">
                            <a href="http://www.facebook.com/ardwatter"><i className="fab fa-facebook icon"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=2347087216343"><i className="fab fa-whatsapp icon"></i></a>
                            <a href="https://www.instagram.com/ardwatter/"><i className="fab fa-instagram icon"></i></a>
                            <a href="https://www.linkedin.com/company/18245563"><i className="fab fa-linkedin-in icon"></i></a>
                        </li>
                    </ul>
                    <ul>
                        <li>Our Newsletter</li>
                        <li>SIGNUP FOR SPECIAL OFFERS</li>
                        <li>
                            <form className="subscribe">
                                <input type="email" placeholder="E-mail" />
                                <button className="btn">SUBSCRIBE</button>
                            </form>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <footer className="containers">
                <div className="footer-copyright">
                    <span>&copy;</span> 
                    <span style={{fontSize:'0.8rem'}}> ARDWATTER </span>  2020. All rights reserved.
                </div> 
            
            </footer>
        </>
    )
}
