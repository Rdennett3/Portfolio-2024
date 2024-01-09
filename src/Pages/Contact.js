import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ljcn0gk', 'template_ccs4h2r', form.current, 'WVzM9ljnTFMYxLvZb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-page-container'>
            <div className='contact-wrapper'>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <label>Name</label>
                    <input type="text" name="user_name" className='form-field' />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Phone #</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className='contact-btn' />
                </form>
            </div>
        </div>
    );
};
