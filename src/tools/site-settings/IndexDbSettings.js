import React, { useEffect, useState } from 'react'
import '../../App.css';
import './SettingsPage.css';
import { getAllTables, purgeAllTable, purgeTableByName } from '../../storage/indexdb';

export default function IndexDbSettings() {
  const [allTables, setallTables] = useState([])

  async function getallTables(){
    const tables = (await getAllTables()).map(table => table.name);
    setallTables(tables)
  }

  useEffect(() => {
    getallTables()
  }, [])
  
  return (
    <div className='baseTabsContainer'>
      <PurgeAllTables/>
      {allTables.map(t => <PurgeTable name={t} key={t} refresh={getallTables}/>)}  
    </div>
  )
}

function PurgeAllTables() {
  const handleOnClick = () => {
    purgeAllTable()
    alert("All Local Tales cleared!")
  };
  return (
      <div>
          <div>Delete All Tables data</div>
          <button onClick={handleOnClick} className='btn btn-outline-danger btn-sm'>Clear</button>
      </div>
  )
}

function PurgeTable({name, refresh}) {
  const handleOnClick = () => {
    purgeTableByName(name)
    refresh()
    alert(`Table ${name} deleted!!!`)
  };
  return (
      <div key={name}>
          <div>Purge Table: <b>{name}</b></div>
          <button onClick={handleOnClick} className='btn btn-outline-danger btn-sm'>Clear</button>
      </div>
  )
}

