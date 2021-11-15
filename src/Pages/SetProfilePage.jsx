import React, { useContext, useEffect } from 'react'
import { Style } from './SetProfilePageStyle'
import { AiFillPlusCircle } from 'react-icons/ai'
import BoxAddSkill from '../components/BoxAddSkill/BoxAddSkill'
import BoxAddEducation from '../components/BoxAddEducation/BoxAddEducation'
import BoxAddProject from '../components/BoxAddProject/BoxAddProject'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Footer from '../container/Footer/Footer'
import { AuthContext } from '../context/AuthContext'
const SetProfilePage = () => {
    const {
        formDataState,
        listSkill,
        listEducation,
        handleAddSkill,
        handleAddEducation,
        changeInput,
        listProject,
        handleAddProject,
        updateProfile,
    } = useContext(UserContext)
    const { authState: isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            console.log('ok')
            return navigate('/login')
        }
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await updateProfile()
        console.log(res)
        if (res.success) {
            navigate(`/${res.user}`)
        } else {
            alert('Có lỗi ')
        }
    }
    return (
        <Style>
            {localStorage.getItem('authToken') ? (
                <div className="set-profile">
                    <div className="title">Edit Your Profile</div>
                    <div className="form">
                        <form
                            onSubmit={handleSubmit}
                            enctype="multipart/form-data"
                        >
                            <div className="form__control">
                                <label htmlFor="name">Tên hiển thị</label>
                                <input
                                    type="text"
                                    required
                                    id="name"
                                    name="name"
                                    placeholder=" Name"
                                    value={formDataState.name}
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="job">Công việc</label>
                                <input
                                    type="text"
                                    required
                                    id="job"
                                    name="job"
                                    value={formDataState.job}
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
                                    required
                                    id="description"
                                    value={formDataState.description}
                                    name="description"
                                    placeholder="Giới thiệu bản thân"
                                    onChange={changeInput}
                                ></textarea>
                            </div>
                            <div className="form__control">
                                <label htmlFor="linkFb">Link Facebook</label>
                                <input
                                    id="linkFb"
                                    name="linkFb"
                                    value={formDataState.linkFb}
                                    placeholder="Facebook"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="linkGithub">Link github</label>
                                <input
                                    type="text"
                                    value={formDataState.linkGithub}
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
                                    value={formDataState.linkTweet}
                                    name="linkTweet"
                                    placeholder="Tweet"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="birthday">Ngày sinh</label>
                                <input
                                    type="date"
                                    required
                                    id="birthday"
                                    value={formDataState.birthday}
                                    name="birthday"
                                    // placeholder="User Name"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="birthday">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formDataState.email}
                                    name="email"
                                    placeholder="User Email"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input
                                    type="number"
                                    required
                                    id="phone"
                                    value={formDataState.phone}
                                    name="phone"
                                    placeholder="012345678"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="CV">CV</label>
                                <input
                                    type="file"
                                    id="CV"
                                    value={formDataState.CV}
                                    required
                                    name="CV"
                                    onChange={changeInput}
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="avatar">Ảnh đại diện</label>
                                <input
                                    type="file"
                                    id="avatar"
                                    value={formDataState.avatar}
                                    required
                                    name="avatar"
                                    onChange={changeInput}
                                />
                            </div>
                            <h2>Học tập</h2>
                            <div className="form__education">
                                {listEducation.map((item) => {
                                    return <BoxAddEducation data={item} />
                                })}
                                <AiFillPlusCircle
                                    onClick={handleAddEducation}
                                ></AiFillPlusCircle>
                            </div>
                            <h2>Kĩ năng</h2>
                            <div className="form__education">
                                {listSkill.map((item) => {
                                    return <BoxAddSkill data={item} />
                                })}
                                <AiFillPlusCircle
                                    onClick={handleAddSkill}
                                ></AiFillPlusCircle>
                            </div>
                            <h2>Project</h2>
                            <div className="form__education">
                                {listProject.map((item) => {
                                    return <BoxAddProject data={item} />
                                })}
                                <AiFillPlusCircle
                                    onClick={handleAddProject}
                                ></AiFillPlusCircle>
                            </div>
                            <button className="beauty">Cập nhật</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            <Footer></Footer>
        </Style>
    )
}

export default SetProfilePage
