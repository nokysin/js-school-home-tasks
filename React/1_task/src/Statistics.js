import React from 'react';

const Statistics = props => (
    <div className="row">
        <div className="col-4">
            <h2><b>Statistics:</b></h2>
            <h5>Repositories: {props.repositories}</h5>
            <h5>Following: {props.following}</h5>
            <h5>Followers: {props.followers}</h5>
        </div>
        <div className="col-8"></div>
    </div>
);

export default Statistics;
