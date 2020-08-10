import React from 'react'

export default function About() {
    return (
        <div className="contact">
        <div className="container ">
            <div className="contact-content" id="contact">
                <div className=" content-story">
                <h1>GET IN TOUCH</h1>
                   <p>We are a creative digital agency focused on growing businesses online.</p>
                   <hr />
                   <br />
                   <p>Through various state-of-the-art digital strategies, your business cannot be lagging in the world scene.</p>
                   <br />
                   <p>Give yourself the right picture! We brand you and give you a name that is unique and can be trusted.</p>
                <p style={{width: '25%',display: 'flex',justifyContent: 'space-between',padding:'2rem 0'}}>
                        <span><a href="http://www.facebook.com/ardwatter"><i className="fab fa-facebook icon"></i></a></span>
                        <span><a href="https://api.whatsapp.com/send?phone=2347087216343"><i className="fab fa-whatsapp icon"></i></a></span>
                        <span><a href="https://www.instagram.com/ardwatter/"><i className="fab fa-instagram icon"></i></a></span>
                        <span><a href="https://www.linkedin.com/company/18245563"><i className="fab fa-linkedin-in icon"></i></a></span>
                    </p>
                </div>
                   <form>
                      <div className="row row1">
                         <div className="col-lg-6 col-md-6 col-sm-6">
                             <input type="text" placeholder="Name"/>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6">
                             <input type="text" placeholder="Email"/>
                         </div>
                      </div>
                      <div className="row row1">
                         <div className="col-lg-6 col-md-6 col-sm-6">
                             <input type="text" placeholder="Phone"/>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6">
                             <input type="text" placeholder="Subject"/>
                         </div>
                      </div>
                      <div className="row row1">
                         <div className="col-lg-12 col-md-12 col-sm-12">
                             <textarea rows="4" cols="50" placeholder="Any Message" />
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
                <p style={{marginBottom:'0px'}}>YOR COMPANY</p>
            </div>
            <div>
                <h1 style={{marginBottom:'0px',color:'#168ECA'}}><i className="fas fa-hourglass-half"></i></h1>
                <p style={{marginBottom:'0px'}}>NICE AGENCY</p>
            </div>
        </div>
            </div>
            <div className="footer-container">
            <footer>
               <p style={{margin: 'revert'}}> Copyright ARDWATTER <spa>&copy;</spa> 2020. All rights reserved.</p> 
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
