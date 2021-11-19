import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { RiPagesLine, RiDatabase2Line } from 'react-icons/ri'
import { Style } from './SkillStyle'
import { MdKeyboardArrowDown, MdOutlineDesignServices } from 'react-icons/md'
import SkillItem from '../../components/SkillItem/SkillItem'
import { UserContext } from '../../context/UserContext'
const Skills = () => {
    // const [listSkill, setListSkill] = useState([
    //     {
    //         title: 'FrontEnd',
    //         time: 'About 1 year',
    //         detail: ['HTML', 'CSS', 'Javascript', 'Reactjs'],
    //     },
    //     {
    //         title: 'FrontEnd',
    //         time: 'About 1 year',
    //         detail: ['HTML', 'CSS', 'Javascript', 'Reactjs'],
    //     },
    //     {
    //         title: 'FrontEnd',
    //         time: 'About 1 year',
    //         detail: ['HTML', 'CSS', 'Javascript', 'Reactjs'],
    //     },
    // ])
    const { listSkill } = useContext(UserContext)
    console.log(listSkill)
    useLayoutEffect(() => {
        const listSkills = document.querySelectorAll('.skill__container--item')
        listSkills.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
            })
        })
    }, [])
    return (
        <Style>
            <div className="section skill" id="skill">
                <div className="skill__title">Skills</div>
                <div className="skill__container">
                    {listSkill.map((item, idx) => {
                        return <SkillItem data={item} key={idx} pos={idx} />
                    })}
                </div>
            </div>
        </Style>
    )
}

export default Skills
