import React from 'react';

const MainImage = props => (
    <div className="row">
        <div className="col-4">
            <img src={props.thumbnail} className="img-thumbnail rounded float-left" alt={props.thumbnailAlt} />
        </div>
        <div className="col-8"></div>
    </div>
    // <div className="row"
    //     <div className="col-3"

    //         <img src="https://avatars0.githubusercontent.com/u/7026117?v=4" class="img-thumbnail rounded float-left" alt="nokysin"/>
    //     />
    // />

    // <div className="card" style={{ width: '18rem' }}>

    // <img 
    //     className="card-img-top" 
    //     src={props.thumbnail}
    // />

    // <div className="card-body">
    //     <h5 className="card-title">{props.name}</h5>
    //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" className="btn btn-primary">Go somewhere</a>
    // </div>
    // </div>
);

export default MainImage;
