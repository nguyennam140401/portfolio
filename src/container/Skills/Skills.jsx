import React from 'react'
import { RiPagesLine, RiDatabase2Line } from 'react-icons/ri'
import { Style } from './SkillStyle'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
const Skills = () => {
    return (
        <Style>
            <div className="section skill" id="skill">
                <div className="skill__title">Skills</div>
                <div className="skill__container">
                    <div className="skill__container--item active">
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
                        <MdKeyboardArrowDown></MdKeyboardArrowDown>
                    </div>
                    <div className="skill__container--item">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Skills
