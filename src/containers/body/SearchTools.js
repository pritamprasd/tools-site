import React, { useEffect, useState } from 'react'

export default function SearchTools({toolsList, updateToolsList}) {
    const [searchInput, setsearchInput] = useState('')
    useEffect(() => {
        // console.log(`toolsList: ${JSON.stringify(toolsList)}`)
        if(searchInput.length > 2){
            const filtered = Array.from(toolsList).filter(toolInfo => toolInfo.title.includes(searchInput))
            // console.log(`search input changed... ${filtered}`)
            updateToolsList(filtered)
        }
    }, [searchInput])
    
    return (
        <div className='searchTools'>
            <input className='searchInput' type='text' onChange={e => setsearchInput(e.target.value)} />
        </div>
    )
}