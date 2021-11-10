import React from 'react'
import { Style } from './EduStyle'
const EduItem = ({ data, pos }) => {
    return pos % 2 === 0 ? (
        <Style className="education__data--item">
            <div className="data animation animation-left">
                <h3>{data.work}</h3>
                <p>{data.loaction}</p>
                <span>
                    <data.icon />
                    {data.time}
                </span>
            </div>
            <div className="line"></div>
            <div className=""></div>
        </Style>
    ) : (
        <Style className="education__data--item ">
            <div className=""></div>
            <div className="line"></div>
            <div className="data animation animation-right">
                <h3>{data.work}</h3>
                <p>{data.loaction}</p>
                <span>
                    <data.icon />
                    {data.time}
                </span>
            </div>
        </Style>
    )
}

export default EduItem
