import "./contact.css"
import Phone from "../../Img/phone.png"
import Email from "../../Img/email.png"
import Addres from "../../Img/address.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_4ud55bt',
            'template_yq13epd',
            formRef.current,
            'user_bWXmxXiJSq3EebuLDDpuC'
            )
            .then
            ((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss about our partnership</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +370 6 36 37 823
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            edvinasramanauskas68@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Addres} alt="" className="contact-icon" />
                            Kaunas, Lithuania
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What's your opinion about this project</b> You can contact me via this form. <b>This form is connected with EmailJs</b> 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "In case contact me via phone number! Thanks!"}
                    </form>
                </div>
            </div>
        </div>
    )
}






export default Contact;