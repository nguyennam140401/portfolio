import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
// import { AiFillPlusCircle } from 'react-icons/ai'
const BoxAddEducation = ({ data }) => {
    const { changeInforEducation } = useContext(UserContext)
    return (
        <div className="form__control">
            <input
                type="text"
                value={data.title}
                placeholder="Làm gì?"
                name="title"
                onChange={(event) => changeInforEducation(event, data.id)}
            />
            <input
                type="date"
                value={data.timeStart}
                placeholder="Bắt đầu"
                name="timeStart"
                onChange={(event) => changeInforEducation(event, data.id)}
            />
            <input
                type="date"
                value={data.timeEnd}
                placeholder="Kết thúc"
                name="timeEnd"
                onChange={(event) => changeInforEducation(event, data.id)}
            />
        </div>
    )
}

export default BoxAddEducation
