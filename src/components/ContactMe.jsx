import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from '../assets/2686827-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ContactMe = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zcc676f', 'template_0dqtjkz', form.current, 'ZP6oec4ra5pwldtcD')
            .then((result) => {
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contactme'>
            <div className='text-center' data-aos='fade-down'><h1 className='text-4xl text-violet-950 font-semibold mt-24 '>--- Feel Free to Knock Me ---</h1></div>
            <div>

                <div>
                    <div className="hero min-h-screen md:w-[90%] mx-auto">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="text-center md:w-1/2 " data-aos='zoom-in'>
                                <img src={image} alt="" className='w-full ' />
                            </div>
                            <div className="card  md:w-1/2 max-w-lg shadow-2xl bg-violet-400" data-aos='fade-left'>
                                <div className="card-body">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name="user_name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="user_email" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Message</span>
                                            </label>
                                            <textarea name="message" rows={5} className="rounded-lg" />

                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn bg-violet-950 text-white border-0 hover:text-black">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;