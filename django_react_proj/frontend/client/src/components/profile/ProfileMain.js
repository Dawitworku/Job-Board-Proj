import React from "react";
import ProfileInfo from './ProfileInfo';
import LogoutButton from '../welcome-auth/LogoutButton';
import { Link } from '@reach/router';

const ProfileMain = () => {

    return (
        <div>
            <h1>Welcome to Job Boards Home!</h1>
            <ProfileInfo />
            <Link to="/company">Select Company</Link>
            <LogoutButton />
        </div>
    )
}

export default ProfileMain;