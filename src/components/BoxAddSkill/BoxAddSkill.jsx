import React, { useContext } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { UserContext } from '../../context/UserContext'

const BoxAddSkill = ({ data }) => {
    const { handleAddDetailSkill, changeInforSkill } = useContext(UserContext)
    return (
        <div className="form__control">
            <input
                type="text"
                value={data.title}
                placeholder="Frontend, backend...."
                name="title"
                onChange={(event) => {
                    changeInforSkill(event, data.id)
                }}
            />
            <input
                type="text"
                value={data.time}
                placeholder="Thời gian học"
                name="time"
                onChange={(event) => {
                    changeInforSkill(event, data.id)
                }}
            />
            <div className="form__control--detail">
                <h4>Những gì học được</h4>
                <div className="detail__tech">
                    {data.detail.map((item) => {
                        return <span>{item}</span>
                    })}
                </div>
                <textarea
                    type="text"
                    placeholder="Ngôn ngữ, thư viện,..."
                    value={data.textDetail}
                    name="textDetail"
                    onChange={(event) => {
                        changeInforSkill(event, data.id)
                    }}
                ></textarea>

                <AiFillPlusCircle
                    onClick={() => {
                        handleAddDetailSkill(data.id)
                    }}
                ></AiFillPlusCircle>
            </div>
        </div>
    )
}

export default BoxAddSkill
