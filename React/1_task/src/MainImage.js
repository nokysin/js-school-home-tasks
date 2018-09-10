import React from 'react';

const MainImage = props => (
    <div className="row">
        <div className="col-4">
            <img src={props.thumbnail} className="img-thumbnail rounded float-left" alt={props.thumbnailAlt} />
        </div>
        <div className="col-8"></div>
    </div>
);

export default MainImage;
