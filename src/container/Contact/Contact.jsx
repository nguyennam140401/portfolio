import React, { useContext, useState } from 'react'
import { Style } from './ContactStyle'
import axios from 'axios'
import {
    HiOutlineLocationMarker,
    HiOutlineMail,
    HiOutlinePhone,
} from 'react-icons/hi'
import { UserContext } from '../../context/UserContext'

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const { formDataState } = useContext(UserContext)
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormState({ ...formState, [field]: value })
    }
    const submit = async (e) => {
        e.preventDefault()
        console.log(formState)
        const res = await axios.post('http://localhost:5000/sendmail', {
            to: formState.email,
            subject: formState.subject,
            message: formState.message,
            emailUser: formDataState.email,
        })

        if (res.data.success) {
            alert('Cám ơn bạn đã gửi liên hệ')
            setFormState({ name: '', email: '', subject: '', message: '' })
        } else {
            alert('Xin lỗi có vấn đề trong quá trình gửi')
        }
    }
    return (
        <Style>
            <div className="section contact" id="contact">
                <div className="contact__title">Contact</div>
                <div className="contact__container">
                    <div className="contact__container--location animation animation-left">
                        <div className="location__item">
                            <div className="icon">
                                <HiOutlineLocationMarker></HiOutlineLocationMarker>
                            </div>
                            <div className="location__infor">
                                <p>{formDataState.address}</p>
                            </div>
                        </div>
                        <div className="location__item">
                            <div className="icon">
                                <HiOutlineMail></HiOutlineMail>
                            </div>
                            <div className="location__infor">
                                <p>{formDataState.email}</p>
                            </div>
                        </div>
                        <div className="location__item">
                            <div className="icon">
                                <HiOutlinePhone></HiOutlinePhone>
                            </div>
                            <div className="location__infor">
                                <p>{formDataState.phone}</p>
                            </div>
                        </div>
                        <div className="location__item">
                            <iframe
                                title="Location "
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7442.582272809997!2d105.89947599999999!3d21.1408091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1636365844383!5m2!1svi!2s"
                                width="500"
                                height="350"
                                style={{ border: 'none' }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="contact__container--form animation animation-right">
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
