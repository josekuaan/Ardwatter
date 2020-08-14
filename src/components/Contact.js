import React, {useState} from 'react'

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
        <div className="contact">
        <div className="containers get-in">
            <div className="contact-content" id="contact">
                <div className=" content-story">
                <h1>GET IN TOUCH</h1>
                   <p>We are a creative digital agency focused on growing businesses online.</p>
                   <hr />
                   <br />
                   <p>Through various state-of-the-art digital strategies, your business cannot be lagging in the world scene.</p>
                   <br />
                   <p>Give yourself the right picture! We brand you and give you a name that is unique and can be trusted.</p>
                <p className="social-contact">
                        <span><a href="http://www.facebook.com/ardwatter"><i className="fab fa-facebook icon"></i></a></span>
                        <span><a href="https://api.whatsapp.com/send?phone=2347087216343"><i className="fab fa-whatsapp icon"></i></a></span>
                        <span><a href="https://www.instagram.com/ardwatter/"><i className="fab fa-instagram icon"></i></a></span>
                        <span><a href="https://www.linkedin.com/company/18245563"><i className="fab fa-linkedin-in icon"></i></a></span>
                    </p>
                </div>
                   <form onSubmit={handleSubmit}>
                      <div className="row row1">
                         <div className="col-lg-6 col-md-6 col-sm-6 fields">
                             <input name='name' className="control-form" type="text" placeholder="Name" onChange={handleChange}/>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 fields">
                             <input name='email' className="control-form" type="text" placeholder="Email" onChange={handleChange}/>
                         </div>
                      </div>
                      <div className="row row1">
                         <div className="col-lg-6 col-md-6 col-sm-6 fields">
                             <input name='phone' className="control-form" type="text" placeholder="Phone" onChange={handleChange}/>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 fields">
                             <input name='subject' className="control-form" type="text" placeholder="Subject" onChange={handleChange}/>
                         </div>
                      </div>
                      <div className="row row1">
                         <div className="col-lg-12 col-md-12 col-sm-12">
                             <textarea name='message' rows="4" cols="50" placeholder="Any Message" onChange={handleChange} />
                         </div>
                      </div>
                      <div className="row row1">
                         <div style={{textAlign: 'left'}}className="col-lg-12 col-md-12 col-sm-12">
                             <input type="submit" value="SUBMIT"/>
                         </div>
                      </div>
                   </form>
            </div>
        </div>
        <div className="contact-footer-content">
            <div className="contact-footer">
            <div>
                <h1 style={{marginBottom:'0px',color:'#168ECA'}}><i className="fas fa-folder-open"></i></h1>
                <p style={{marginBottom:'0px'}}>NEW COMPANY</p>
            </div>
            <div>
                <h1 style={{marginBottom:'0px',color:'#168ECA'}}><i className="fas fa-futbol"></i></h1>
                <p style={{marginBottom:'0px'}}>NEW AGENCY</p>
            </div>
            <div>
                <h1 style={{marginBottom:'0px',color:'#168ECA'}}><i className="far fa-cube"></i></h1>
                <p style={{marginBottom:'0px'}}>MY AGENCY</p>
            </div>
            <div>
                <h1 style={{marginBottom:'0px',color:'#168ECA'}}><i className="fas fa-tachometer-alt"></i></h1>
                <p style={{marginBottom:'0px'}}>YOUR COMPANY</p>
            </div>
            <div>
                <h1 style={{marginBottom:'0px',color:'#168ECA'}}><i className="fas fa-hourglass-half"></i></h1>
                <p style={{marginBottom:'0px'}}>NICE AGENCY</p>
            </div>
        </div>
            </div>
            <div className="footer-container">
            <footer className="">
               <p ><span style={{paddingRight:'8rem',fontFamily:'Poppins'}} href="#">ARDWATTER</span><span>&copy;</span> <span style={{fontSize:'0.8rem'}}>ARDWATTER</span> 2020. All rights reserved.</p> 
                <ul>
                    <li><a href="http://www.facebook.com/ardwatter"><i className="fab fa-facebook icon"></i></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=2347087216343"><i className="fab fa-whatsapp icon"></i></a></li>
                    <li><a href="https://www.instagram.com/ardwatter/"><i className="fab fa-instagram icon"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/18245563"><i className="fab fa-linkedin-in icon"></i></a></li>
                </ul>
            </footer>
            </div>
        </div>
    )
}
