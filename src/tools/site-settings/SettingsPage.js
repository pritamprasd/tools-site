import React, { useState } from 'react'
import '../../App.css';
import './SettingsPage.css';
import { tabs } from '../../appConfig';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs" id="settingsTabs">
        {tabs.map(t=> 
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
              href={"#"+t.id}
            >
              {t.title}
            </a>
          </li>
        )}        
      </ul>

      <div className="tab-content mt-3">
         {tabs.map(t=> 
          <div id="general"
            className={`tab-pane fade ${activeTab === t.id ? 'show active' : ''}`}>          
          {t.component}
        </div>
        )} 
      </div>
    </div>
  )
}

