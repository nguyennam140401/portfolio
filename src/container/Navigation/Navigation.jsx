import React from 'react'
import { Style } from './NavigationStyle'
import { AiFillHome, AiFillProject } from 'react-icons/ai'
import { BsFillPersonFill, BsBookFill } from 'react-icons/bs'
import { RiContactsFill } from 'react-icons/ri'
import { MdSchool } from 'react-icons/md'
const Navigation = () => {
    return (
        <Style>
            <div className="nav">
                <div className="nav_list">
                    <ul>
                        <li>
                            <a href="">
                                <AiFillHome />
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFillPersonFill></BsFillPersonFill>
                                <p>About</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <MdSchool></MdSchool>
                                <p>Education</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsBookFill></BsBookFill>
                                <p>Skills</p>
                            </a>
                        </li>
                        <li>
                            <a href="#project">
                                <AiFillProject></AiFillProject>
                                <p>Projects</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <RiContactsFill></RiContactsFill>
                                <p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Style>
    )
}

export default Navigation
