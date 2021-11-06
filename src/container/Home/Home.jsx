import React from 'react'
import { Style } from './HomeStyle'
import Avatar from '../../assets/images/avatar.jpg'
import { TiArrowRightOutline } from 'react-icons/ti'
import { FiFacebook, FiGithub } from 'react-icons/fi'

const Home = () => {
    return (
        <Style>
            <div className="section home" id="home">
                <div className="home__img">
                    <img src={Avatar} alt="" />
                </div>
                <div className="home__content">
                    <h2 className="home__content--title">
                        Xin chào , mình là Nam
                    </h2>
                    <p className="home__content--job">FrontEnd developer .</p>
                    <p className="home__content--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In vel, deleniti neque vero corporis voluptatem
                        doloribus ipsa officiis ipsam possimus, a ratione nam
                        labore? Aut doloremque unde illo magnam quia!
                    </p>
                    <div className="home__content--link">
                        <a href="https://www.facebook.com/bautroi.trongxanh.18/">
                            <FiFacebook></FiFacebook>
                        </a>
                        <a href="https://github.com/nguyennam140401">
                            <FiGithub></FiGithub>
                        </a>
                    </div>
                    <div className="home__content--button">
                        <a href="#about">
                            <button>
                                Read more{' '}
                                <TiArrowRightOutline></TiArrowRightOutline>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Home
