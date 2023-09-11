import React, { useEffect, useState } from 'react'
import '../../App.css'
import { appConfig } from '../../appConfig';
import { useGlobalContext } from '../../store/globalVars';

const getRandomColor = () => Math.floor(Math.random() * 256)

export default function Tags() {
    const { globalVariables, updateGlobalVariable } = useGlobalContext();
    const [tags, setTags] = useState([{}])
    useEffect(() => {
        setTags([...new Set(appConfig.toolsList.flatMap(t => t.tags))].map(t => {
            return ({
                name: t,
                color: `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
            })
        }))
    }, [])
    function addOrRemoveFromSelectedTags(tag){
        if(globalVariables.activeTags.includes(tag)){
            updateGlobalVariable("activeTags", globalVariables.activeTags.filter(i => i !== tag))
        } else{
            updateGlobalVariable("activeTags", globalVariables.activeTags.concat(tag))
        }
        console.log(`tags: ${globalVariables.activeTags}`)
    }
    return (
        <div className='tags'>
            {tags.map(t => <Tag key={t.id} className="tag" name={t.name} color={t.color} toggleTag={addOrRemoveFromSelectedTags}/>)}
        </div>
    )
}

function Tag({name, color, toggleTag}) {
    const[tagColor, setTagcolor] = useState(color)
    const[tagBackGround, setTagBackground] = useState('white')
    function handleTagClick(){
        toggleTag(name)
        if(tagColor === color){
            setTagcolor("white")
        } else {
            setTagcolor(color)
        }
        if(tagBackGround === color){
            setTagBackground("white")
        } else {
            setTagBackground(color)
        }
    }
    return (<div className='tag' style={{
        color: tagColor,
        backgroundColor: tagBackGround
    }} onClick={handleTagClick}>#{name}</div>)
}
