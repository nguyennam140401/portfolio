import React from 'react'
import { Style } from './EducationStyle'
import { MdOutlineSchool } from 'react-icons/md'
const Education = () => {
    return (
        <Style>
            <div className="section education" id="education">
                <div className="education__title">Education</div>
                <div className="education__data">
                    <div className="education__data--item">
                        <div className="data">
                            <h3>Information Technology</h3>
                            <p>Hanoi university of Industry</p>
                            <span>
                                <MdOutlineSchool></MdOutlineSchool>2019-Nay
                            </span>
                        </div>
                        <div className="line"></div>
                        <div className=""></div>
                    </div>

                    <div className="education__data--item">
                        <div className=""></div>
                        <div className="line"></div>
                        <div className="data">
                            <h3>Information Technology</h3>
                            <p>Hanoi university of Industry</p>
                            <span>
                                <MdOutlineSchool></MdOutlineSchool>2019-Nay
                            </span>
                        </div>
                    </div>
                    <div className="education__data--item">
                        <div className="data">
                            <h3>Information Technology</h3>
                            <p>Hanoi university of Industry</p>
                            <span>
                                <MdOutlineSchool></MdOutlineSchool>2019-Nay
                            </span>
                        </div>
                        <div className="line"></div>
                        <div className=""></div>
                    </div>

                    <div className="education__data--item">
                        <div className=""></div>
                        <div className="line"></div>
                        <div className="data">
                            <h3>Information Technology</h3>
                            <p>Hanoi university of Industry</p>
                            <span>
                                <MdOutlineSchool></MdOutlineSchool>2019-Nay
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Education
