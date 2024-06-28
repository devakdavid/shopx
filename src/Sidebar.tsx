import React from 'react';
import './App.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                {/* Add more items here */}
            </ul>
        </div>
    );
}

export default Sidebar;