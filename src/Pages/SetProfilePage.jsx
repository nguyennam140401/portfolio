import React, { useState } from 'react'
import { Style } from './SetProfilePageStyle'
import { AiFillPlusCircle } from 'react-icons/ai'
const SetProfilePage = () => {
    const [formDataState, setFormDataState] = useState({
        name: '',
        job: '',
        description: '',
        linkFb: '',
        linkGithub: '',
        linkTweet: '',
        linkYouTube: '',
        birthday: '',
        phone: '',
        email: '',
    })
    const [listEducation, setListEducation] = useState([
        {
            id: 1,
            title: 'bla blabl',
            timeStart: '2019-12-12',
            timeEnd: null,
        },
    ])
    const [listSkill, setListSkill] = useState([
        {
            id: 1,
            title: 'haha',
            time: null,
            detail: ['bla bla '],
        },
    ])
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormDataState({ ...formDataState, [field]: value })
    }
    const boxEducation = (data) => {
        return (
            <div className="form__control">
                <input type="text" value={data.title} placeholder="Làm gì?" />
                <input
                    type="date"
                    value={data.timeStart}
                    placeholder="Bắt đầu"
                />
                <input
                    type="date"
                    value={data.timeEnd}
                    placeholder="Kết thúc"
                />
            </div>
        )
    }
    const boxSkill = (data) => {
        return (
            <div className="form__control">
                <input
                    type="text"
                    value={data.title}
                    placeholder="Frontend, backend...."
                />
                <input
                    type="text"
                    value={data.time}
                    placeholder="Thời gian học"
                />
                <div className="form__control--detail">
                    <h4>Những gì học được</h4>
                    {data.detail.map((item) => {
                        return (
                            <input
                                type="text"
                                placeholder="Ngôn ngữ, thư viện,..."
                                value={item}
                            />
                        )
                    })}
                    <input type="text" placeholder="Ngôn ngữ , thư viện, ..." />
                    <AiFillPlusCircle></AiFillPlusCircle>
                </div>
            </div>
        )
    }
    const generateID = function () {
        return Math.random().toString(36).substr(2, 9)
    }
    const handleAddEducation = () => {
        const eduItem = {
            id: generateID(),
            title: '',
            timeStart: null,
            timeEnd: null,
        }
        setListEducation([...listEducation, eduItem])
    }
    const handleAddSkill = () => {
        const skillItem = {
            id: generateID(),
            title: '',
            time: null,
            detail: [],
        }
        setListSkill([...listSkill, skillItem])
    }
    return (
        <Style>
            <div className="set-profile">
                <div className="title">Edit Your Profile</div>
                <div className="form">
                    <form>
                        <div className="form__control">
                            <label htmlFor="name">Tên hiển thị</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" Name"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="form__control">
                            <label htmlFor="job">Công việc</label>
                            <input
                                type="text"
                                id="job"
                                name="job"
                                placeholder="User Name"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="form__control">
                            <label htmlFor="description">
                                Giới thiệu bản thân
                            </label>
                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Giới thiệu bản thân"
                                onChange={changeInput}
                            ></textarea>
                        </div>
                        <div className="form__control">
                            <label htmlFor="linkFb">Link Facebook</label>
                            <input
                                type="text"
                                id="linkFb"
                                name="linkFb"
                                placeholder="Facebook"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="form__control">
                            <label htmlFor="linkGithub">Link github</label>
                            <input
                                type="text"
                                id="linkGithub"
                                name="linkGithub"
                                placeholder="Link github"
                                onChange={changeInput}
                            />
                        </div>
                        <div className="form__control">
                            <label htmlFor="linkTweet">Link Tweet</label>
                            <input
                                type="text"
                                id="linkTweet"
                                name="linkTweet"
                                placeholder="Tweet"
                                onChange={changeInput}
                            />
                        </div>

                        <div className="form__control">
                            <label htmlFor="birthday">Ngày sinh</label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                // placeholder="User Name"
                                onChange={changeInput}
                            />
                        </div>
                        <h2>Học tập</h2>
                        <div className="form__education">
                            {listEducation.map((item) => {
                                return boxEducation(item)
                            })}
                            <AiFillPlusCircle
                                onClick={handleAddEducation}
                            ></AiFillPlusCircle>
                        </div>
                        <h2>Kĩ năng</h2>
                        <div className="form__education">
                            {listSkill.map((item) => {
                                return boxSkill(item)
                            })}
                            <AiFillPlusCircle
                                onClick={handleAddSkill}
                            ></AiFillPlusCircle>
                        </div>
                    </form>
                </div>
            </div>
        </Style>
    )
}

export default SetProfilePage
