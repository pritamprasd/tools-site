import React, { useEffect, useState } from 'react'
import '../../App.css'
import { appConfig } from '../../appConfig';

const getRandomColor = () => Math.floor(Math.random() * 256)

export default function Tags() {
    const [tools, setTools] = useState(appConfig.toolsList)
    const [tags, setTags] = useState([{}])
    //TODO: store in global store
    const [seletedTags, setSeletedTags] = useState([""])
    useEffect(() => {
        setTags([...new Set(tools.flatMap(t => t.tags))].map(t => {
            return ({
                name: t,
                color: `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
            })
        }))
    }, [tools])
    function addOrRemoveFromSelectedTags(tag){
        console.log(`tag: ${tag}`)
        if(seletedTags.includes(tag)){
            setSeletedTags(seletedTags.filter(i => i !== tag))
        } else{
            setSeletedTags(seletedTags.concat(tag))
        }
    }
    return (
        <div className='tags'>
            {tags.map(t => <Tag name={t.name} color={t.color} toggleTag={addOrRemoveFromSelectedTags}/>)}
        </div>
    )
}

function Tag({name, color, toggleTag}) {
    function handleTagClick(){
        toggleTag(name)
    }
    return (<div className='tag' style={{
        color: color
    }} onClick={handleTagClick}>#{name}</div>)
}
