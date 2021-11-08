import React from 'react'
import AboutImg from '../../assets/images/about.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Style } from './AboutStyle'
import CV from '../../assets/CV_My_CV.pdf'
import { FiDownload } from 'react-icons/fi'
const About = () => {
    // const infor = {
    //     address: 'Liên Hà, Đông Anh, Hà Nội',
    //     email: 'nguyennam140401@gmail.com',
    //     birthday: '14-04-2001',
    //     phone: '0346663207',
    // }
    return (
        <Style>
            <div className="section about" id="about">
                <div className="about__title">About</div>
                <div className="about__container">
                    <div className="about__container--img">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="about__container--infor">
                        <h2>Một số thông tin về mình</h2>
                        <p className="infor-item">
                            <span>
                                <MdKeyboardArrowRight /> Birthday:
                            </span>{' '}
                            14-04-2001
                        </p>
                        <p className="infor-item">
                            <span>
                                <MdKeyboardArrowRight /> Phone:
                            </span>{' '}
                            0346663207
                        </p>
                        <p className="infor-item">
                            <span>
                                <MdKeyboardArrowRight /> Email:
                            </span>{' '}
                            nguyennam140401@gmail.com
                        </p>
                        <p className="infor-item">
                            <span>
                                <MdKeyboardArrowRight /> Address:
                            </span>{' '}
                            Liên Hà, Đông Anh, Hà Nội
                        </p>
                        <div className="infor-cv">
                            <a href={CV} download>
                                <button className="beauty">
                                    Dowload CV <FiDownload></FiDownload>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default About
