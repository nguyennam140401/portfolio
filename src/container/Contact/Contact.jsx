import React, { useState } from 'react'
import { Style } from './ContactStyle'
import {
    HiOutlineLocationMarker,
    HiOutlineMail,
    HiOutlinePhone,
} from 'react-icons/hi'

const Contact = () => {
    const [formDataState, setFormDataState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormDataState({ ...formDataState, [field]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(formDataState)
    }
    return (
        <Style>
            <div className="section contact" id="contact">
                <div className="contact__title">Contact</div>
                <div className="contact__container">
                    <div className="contact__container--location">
                        <div className="location__item">
                            <div className="icon">
                                <HiOutlineLocationMarker></HiOutlineLocationMarker>
                            </div>
                            <div className="location__infor">
                                <p>Liên Hà Đông Anh Hà Nội</p>
                            </div>
                        </div>
                        <div className="location__item">
                            <div className="icon">
                                <HiOutlineMail></HiOutlineMail>
                            </div>
                            <div className="location__infor">
                                <p>nguyennam140401@gmail.com</p>
                            </div>
                        </div>
                        <div className="location__item">
                            <div className="icon">
                                <HiOutlinePhone></HiOutlinePhone>
                            </div>
                            <div className="location__infor">
                                <p>0346663207</p>
                            </div>
                        </div>
                        <div className="location__item">
                            <iframe
                                title="Location "
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7442.582272809997!2d105.89947599999999!3d21.1408091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1636365844383!5m2!1svi!2s"
                                width="500"
                                height="350"
                                style={{ border: 'none' }}
                                allowfullscreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="contact__container--form">
                        <form onSubmit={submit}>
                            <div className="form__control">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="subject"
                                    name="message"
                                    placeholder="Message"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <button className="beauty">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Contact
