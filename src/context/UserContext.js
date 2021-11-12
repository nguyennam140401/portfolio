import { createContext, useState } from 'react'
import lang from 'lodash/lang'
export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
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
        CV: '',
        avatar: '',
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
            detail: [1, 2, 3, 4, 5, 6],
            textDetail: '1,2,3,4,5,6',
        },
    ])
    const [listProject, setListProject] = useState([
        {
            id: 1,
            title: '',
            img: '',
            description: '',
            tech: [1, 2, 3, 4],
            textTech: '1,2,3,4',
        },
    ])
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormDataState({ ...formDataState, [field]: value })
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
    const changeInforEducation = (event, id) => {
        // console.log(event.target, id)
        const field = event.target.name
        const value = event.target.value
        let newList = lang.cloneDeep(listEducation)
        newList = newList.map((item) => {
            return item.id === id ? { ...item, [field]: value } : item
        })
        console.log(newList)
        setListEducation(newList)
    }
    const handleAddSkill = () => {
        const skillItem = {
            id: generateID(),
            title: '',
            time: null,
            detail: [],
            textDetail: '',
        }
        setListSkill([...listSkill, skillItem])
    }
    const handleAddDetailSkill = (id) => {
        const newList = lang.cloneDeep(listSkill)
        newList.forEach((item) => {
            if (item.id === id) item.detail.push('')
        })
        setListSkill(newList)
    }
    const handleAddProject = () => {
        const projectItem = {
            id: generateID(),
            title: '',
            img: '',
            description: '',
            tech: [],
        }
        setListProject([...listProject, projectItem])
    }

    const changeInforProject = (event, id) => {
        const field = event.target.name
        const value = event.target.value
        let newList = lang.cloneDeep(listProject)
        newList = newList.map((item) => {
            if (item.id === id) {
                item = { ...item, [field]: value }

                item.tech = item.textTech.trim().split(',')
            }
            return item
        })
        setListProject(newList)
    }
    const changeInforSkill = (event, id) => {
        const field = event.target.name
        const value = event.target.value
        let newList = lang.cloneDeep(listSkill)
        newList = newList.map((item) => {
            if (item.id === id) {
                item = { ...item, [field]: value }

                item.detail = item.textDetail.trim().split(',')
            }
            return item
        })
        setListSkill(newList)
    }
    const data = {
        formDataState,
        listSkill,
        listEducation,
        handleAddSkill,
        handleAddEducation,
        changeInput,
        handleAddDetailSkill,
        listProject,
        handleAddProject,
        // handleAddTechProject,
        changeInforEducation,
        changeInforProject,
        changeInforSkill,
    }
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
export default UserContextProvider
