import React from 'react';

const MainInfo = props => (
    <div className="row">
        <div className="col-4">
            <h1><b>{props.name}</b></h1>
            <h2>{props.username}</h2>
            <h5>{props.location}</h5>
            <h5>{props.company}</h5>
        </div>
        <div className="col-8"></div>
    </div>
);

export default MainInfo;
