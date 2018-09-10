import React from 'react';
import MainImage from './MainImage';
import MainInfo from './MainInfo';
import Statistics from './Statistics';

const Profile = props => (
    <div>
        <MainImage {...props} />
        <MainInfo {...props} />
        <Statistics {...props} />
    </div>
);

export default Profile;
