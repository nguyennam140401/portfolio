import React, { useState } from 'react'
import { Style } from './EducationStyle'
import { MdOutlineSchool } from 'react-icons/md'
import EduItem from '../../components/Edu/EduItem'
const Education = () => {
    const [eduState] = useState([
        {
            work: 'Information Technology',
            location: 'Hanoi university of Industry',
            icon: MdOutlineSchool,
            time: '2019-Nay',
        },
        {
            work: 'Information Technology',
            location: 'Hanoi university of Industry',
            icon: MdOutlineSchool,
            time: '2019-Nay',
        },
        {
            work: 'Information Technology',
            location: 'Hanoi university of Industry',
            icon: MdOutlineSchool,
            time: '2019-Nay',
        },
        {
            work: 'Information Technology',
            location: 'Hanoi university of Industry',
            icon: MdOutlineSchool,
            time: '2019-Nay',
        },
    ])
    return (
        <Style>
            <div className="section education" id="education">
                <div className="education__title">Education</div>
                <div className="education__data">
                    {eduState.map((item, idx) => {
                        return <EduItem key={idx} pos={idx} data={item} />
                    })}
                </div>
            </div>
        </Style>
    )
}

export default Education
