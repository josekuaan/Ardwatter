import React from 'react'
import step_img_1 from '../images/step_img_1.jpg'
import step_img_2 from '../images/step_img_2.jpg'
import step_img_3 from '../images/step_img_3.jpg'
import step_img_4 from '../images/step_img_4.jpg'
// import React from 'react'

export default function Strategy() {
    return (
        <div className='strategy-section'>
            <div className="step-content" data-aos="fade-up">
                <div className="strategy-content ">
                    <div className="steps"><h1><span style={{color:'#FF497C'}}>01</span>Strategy</h1></div>
                    <div className="steps "><div className=" step_img_ step_img_1"><img src={step_img_1} alt="..." /></div></div>
                    <div className="steps">We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</div>
                </div>
            </div>
            <div className="step-content right" data-aos="fade-up">
                <div className="strategy-content ">
                    <div className="steps">Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you.</div>
                        <div className="steps "><div className=" step_img_ step_img_2"><img src={step_img_2} alt="..." /></div></div>
                        <div className="steps"><h1><span style={{color:'#A0CE4E'}}>02</span>Design</h1></div>
                    </div>
                </div>
            <div className="step-content" data-aos="fade-up">
                <div className="strategy-content ">
                    <div className="steps"><h1><span style={{color:'#00BEA3'}}>03</span>Develop</h1></div>
                    <div className="steps "><div className=" step_img_ step_img_3"><img src={step_img_3} alt="..." /></div></div>
                    <div className="steps">We turn your ideas into a reality. &our website is placed on a "development server" where you get to watch the whole process, live.</div>
                </div>
            </div>
            <div className=" step-content right" data-aos="fade-up">
                <div className="strategy-content ">
                    <div className="steps">This is where you go live, to the world. Design, marketing, and maintenance; we'll be at your side for the life of your site</div>
                    <div className="steps "><div className=" step_img_ step_img_4"><img src={step_img_4} alt="..." /></div></div>
                    <div className="steps"><h1><span style={{color:'#F1894C'}}>04</span> Support</h1></div>
                </div>
           </div>
        </div>
    )
}
