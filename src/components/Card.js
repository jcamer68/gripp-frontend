import React from 'react';

const Card = ({ name, stat, details }) => {
    return (<div>
        <div className="e-card">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title"> {name}</div>
                </div>
            </div>
            <div className="e-card-content">{stat}</div>
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-subtitle"> {details}</div>
                </div>
            </div>
        </div>
    </div>);
};

export default Card;