import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
const SkillItem = ({ data, pos }) => {
    return (
        <div
            className="skill__container--item animation animation-top"
            data-delay={`${pos}`}
        >
            <div className="icon">
                <RiPagesLine></RiPagesLine>
            </div>
            <div className="infor">
                <div className="infor__title">
                    <h3>{data.title}</h3>
                    <p>{data.time}</p>
                </div>
                <div className="infor__detail">
                    {data.detail.map((item) => {
                        return <div className="infor__detail--item">{item}</div>
                    })}
                    {/* <div className="infor__detail--item">HTML</div>
                    <div className="infor__detail--item">CSS</div>
                    <div className="infor__detail--item">Javascript</div>
                    <div className="infor__detail--item">Reactjs</div>
                    <div className="infor__detail--item">Nextjs</div> */}
                </div>
            </div>
            <div className="option">
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
            </div>
        </div>
    )
}

export default SkillItem
