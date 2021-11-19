import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import WeatherApp from '../../assets/images/weather_app.png'
import { Style } from './ProjectStyle'
import TodoApp from '../../assets/images/todoapp.png'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import { UserContext } from '../../context/UserContext'
const Project = () => {
    // const [listProject, setListProject] = useState([
    //     {
    //         name: 'Weather App',
    //         img: WeatherApp,
    //         description:
    //             'Cho phép người dùng xem thời tiết hiện tại và dự báo cho 7 ngày tới',
    //         tech: ['ReactJs'],
    //         link: 'https://weather-app-namnv.netlify.app',
    //     },
    //     {
    //         name: 'Todo App',
    //         img: TodoApp,
    //         description:
    //             'Cho phép người dùng đăng nhập, thêm nhiệm vụ cần làm với các trạng thái(Hoàn thành, đang làm, chưa làm) kèm liên kết',
    //         tech: ['ReactJs', 'NodeJs', 'MongoDB'],
    //         link: 'https://namnv-todolist.netlify.app/',
    //     },
    // ])
    const { listProject } = useContext(UserContext)
    useLayoutEffect(() => {
        const listProject = document.querySelectorAll(
            '.project__container--item'
        )
        listProject.forEach((item) => {
            item.addEventListener('click', () => {
                if (!item.classList.contains('active')) {
                    item.classList.add('active')
                }
            })
        })
    }, [listProject])

    const hiddenDetail = () => {
        document
            .querySelector('.project__container--item.active')
            .classList.remove('active')
    }
    return (
        <Style>
            <div className="section project" id="project">
                <div className="project__title">Project</div>
                <div className="project__container">
                    {listProject.map((item, idx) => {
                        return <ProjectItem data={item} key={idx} pos={idx} />
                    })}
                    {/* <div className="project__container--item animation animation-top ">
                        <div className="item__img">
                            <img src={WeatherApp} alt="Weather App" />
                        </div>
                        <h4 className="item__title">Weather App</h4>
                        <div className="item__infor" onClick={hiddenDetail}>
                            <div
                                className="contain"
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                <div className="contain__infor--title">
                                    <span>Name:</span> Weather App
                                </div>
                                <div className="contain__infor--tech">
                                    <div className="tech__item">
                                        <h3>Giới thiệu</h3>
                                        <div className="tool">
                                            Cho phép người dùng xem thời tiết
                                            hiện tại và dự báo cho 7 ngày tới
                                        </div>
                                    </div>
                                    <div className="tech__item">
                                        <h3>Công Nghệ</h3>
                                        <div className="tool">ReactJS</div>
                                    </div>
                                </div>
                                <div className="contain__infor--link">
                                    <a href="https://weather-app-namnv.netlify.app/">
                                        <button className="beauty">
                                            Xem Chi Tiết
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="project__container--item animation animation-top "
                        data-delay="1"
                    >
                        <div className="item__img">
                            <img src={TodoApp} alt="Weather App" />
                        </div>
                        <h4 className="item__title">Todo App</h4>
                        <div className="item__infor" onClick={hiddenDetail}>
                            <div
                                className="contain"
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                <div className="contain__infor--title">
                                    <span>Name:</span> Todo App
                                </div>
                                <div className="contain__infor--tech">
                                    <div className="tech__item">
                                        <h3>Giới thiệu</h3>
                                        <div className="tool">
                                            Cho phép người dùng đăng nhập, thêm
                                            nhiệm vụ cần làm với các trạng
                                            thái(Hoàn thành, đang làm, chưa làm)
                                            kèm liên kết
                                        </div>
                                    </div>
                                    <div className="tech__item">
                                        <h3>Front End</h3>
                                        <div className="tool">ReactJS</div>
                                    </div>
                                    <div className="tech__item">
                                        <h3>Back End</h3>
                                        <div className="tool">NodeJs</div>
                                    </div>
                                    <div className="tech__item">
                                        <h3>Database</h3>
                                        <div className="tool">MongoDB</div>
                                    </div>
                                </div>
                                <div className="contain__infor--link">
                                    <a href="https://namnv-todolist.netlify.app/">
                                        <button className="beauty">
                                            Xem Chi Tiết
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Style>
    )
}

export default Project
