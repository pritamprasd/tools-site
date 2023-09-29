import React from 'react'
import './Loading.css'

export default function Loading() {
    return (
        <div className="main_body">
            <div className="loading_bar">
                <div className="load_section">
                    <div className="circle">
                        <div className="dot"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                    </div>
                    <div className="circle">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
