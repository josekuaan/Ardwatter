import React from 'react'
import ABOUT_IMG from '../images/about_us.png'


export default function About() {
    function ReadMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
     
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
    return (
            <section className="containers ">
                 <div className="about-content" id="about">
                 <div className=" about-story">
                        <h1>A FEW WORDS <span style={{color: '#768EA7'}}>&#45;</span> ABOUT US</h1>
                        <p>
                        We are a creative digital agency focused on growing brands. Our passion is to holistically 
                        build thriving and cost-effective businesses by progressively leveraging on cutting-edge models. 
                        Half of the world's population is on the internet, and 37% of that population are
                        <span id="dots">...</span> 
                        <span id="more" style={{display: 'none'}}>
                        active social media users, hence any business that is not online is simply hiding. Our work includes Website Development, 
                        SEO Implementation, App development, Branding, Strategy and Consulting, Digital Marketing which
                         includes social media marketing, email marketing and influencer marketing, video content marketing.
                        </span><br /><br />
                         <a id="myBtn" onClick={()=>ReadMore()}>Read More</a>
                        </p>
                    </div>
                    <div className="img-container" data-aos="fade-up">
                       <img src={ABOUT_IMG} alt="..." style={{width: '100%'}}/>
                    </div>
                 </div>
            </section>

    )
}
