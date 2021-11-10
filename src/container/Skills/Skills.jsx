import React, { useEffect } from 'react'
import { RiPagesLine, RiDatabase2Line } from 'react-icons/ri'
import { Style } from './SkillStyle'
import { MdKeyboardArrowDown, MdOutlineDesignServices } from 'react-icons/md'
const Skills = () => {
    useEffect(() => {
        const listSkills = document.querySelectorAll('.skill__container--item')
        listSkills.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })
    }, [])
    return (
        <Style>
            <div className="section skill" id="skill">
                <div className="skill__title">Skills</div>
                <div className="skill__container">
                    <div className="skill__container--item animation animation-top">
                        <div className="icon">
                            <RiPagesLine></RiPagesLine>
                        </div>
                        <div className="infor">
                            <div className="infor__title">
                                <h3>Frontend Developer</h3>
                                <p>About 1 year</p>
                            </div>
                            <div className="infor__detail">
                                <div className="infor__detail--item">HTML</div>
                                <div className="infor__detail--item">CSS</div>
                                <div className="infor__detail--item">
                                    Javascript
                                </div>
                                <div className="infor__detail--item">
                                    Reactjs
                                </div>
                                <div className="infor__detail--item">
                                    Nextjs
                                </div>
                            </div>
                        </div>
                        <div className="option">
                            <MdKeyboardArrowDown></MdKeyboardArrowDown>
                        </div>
                    </div>
                    <div
                        className="skill__container--item animation animation-top"
                        data-delay="1"
                    >
                        <div className="icon">
                            <RiDatabase2Line></RiDatabase2Line>
                        </div>
                        <div className="infor">
                            <div className="infor__title">
                                <h3>Backend Developer</h3>
                                <p>About 3 month</p>
                            </div>
                            <div className="infor__detail">
                                <div className="infor__detail--item">
                                    NodeJs
                                </div>
                                <div className="infor__detail--item">
                                    MongoDB
                                </div>
                                <div className="infor__detail--item">
                                    SQLServer
                                </div>
                                <div className="infor__detail--item">MySQL</div>
                            </div>
                        </div>
                        <div className="option">
                            <MdKeyboardArrowDown></MdKeyboardArrowDown>
                        </div>
                    </div>
                    <div
                        className="skill__container--item animation animation-top"
                        data-delay="2"
                    >
                        <div className="icon">
                            <MdOutlineDesignServices></MdOutlineDesignServices>
                        </div>
                        <div className="infor">
                            <div className="infor__title">
                                <h3>Design</h3>
                                <p>None</p>
                            </div>
                            <div className="infor__detail">
                                <div className="infor__detail--item">
                                    Chua biet
                                </div>
                            </div>
                        </div>
                        <div className="option">
                            <MdKeyboardArrowDown></MdKeyboardArrowDown>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Skills
