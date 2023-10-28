import './TaskPlanner.css';
import '../../App.css';

import React, { useState } from 'react'

export default function TaskPlanner() {
    return (
        <div>
            <Container/>
        </div>
    )
}

const DraggableDiv = ({ id, onDragStart }) => {
    const [isDragging, setDragging] = useState(false);

    const handleMouseDown = (e) => {
        setDragging(true);
        onDragStart(id);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseUp = () => {
        setDragging(false);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            className={`draggable-div`}
            onMouseDown={handleMouseDown}
            draggable="true"
        >
            Drag me!
        </div>
    );
};

const Container = () => {
    const [draggedItemId, setDraggedItemId] = useState(null);

    const handleDragStart = (id) => {
        setDraggedItemId(id);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        console.log(`Dragged into the container: ${draggedItemId}`);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        console.log(`Dragged out of the container: ${draggedItemId}`);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className="container"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
        >
            <h2>Container</h2>
            <DraggableDiv id="draggable1" onDragStart={handleDragStart} />
            <DraggableDiv id="draggable2" onDragStart={handleDragStart} />
        </div>
    );
};