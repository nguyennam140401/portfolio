import React, { useContext } from 'react'
// import { AiFillPlusCircle } from 'react-icons/ai'
import { UserContext } from '../../context/UserContext'

const BoxAddProject = ({ data }) => {
    const { changeInforProject } = useContext(UserContext)
    return (
        <div className="form__control">
            <input
                type="text"
                value={data.title}
                name="title"
                onChange={(event) => {
                    changeInforProject(event, data.id)
                }}
                placeholder="Tên sản phẩm"
            />
            <input
                type="file"
                value={data.img}
                name="img"
                onChange={(event) => {
                    changeInforProject(event, data.id)
                }}
            />
            <div className="form__control--detail">
                <h4>Công nghệ</h4>
                <div className="detail__tech">
                    {data.tech.map((item) => {
                        return <span>{item}</span>
                    })}
                </div>
                <textarea
                    type="text"
                    value={data.textTech}
                    placeholder="Ngôn ngữ, thư viện,... sử dụng"
                    name="textTech"
                    onChange={(event) => {
                        changeInforProject(event, data.id)
                    }}
                ></textarea>
                {/* <AiFillPlusCircle
                    onClick={() => {
                        handleAddTechProject(data.id)
                    }}
                ></AiFillPlusCircle> */}
            </div>
        </div>
    )
}

export default BoxAddProject
