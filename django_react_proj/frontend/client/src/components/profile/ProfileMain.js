import React from "react";
import ProfileInfo from './ProfileInfo';
import LogoutButton from '../welcome-auth/LogoutButton';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from '@reach/router';
import { useAuth0 } from "@auth0/auth0-react";

const ProfileMain = () => {

    const { logout, user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Welcome to Job Boards!</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/company">Company Page</Nav.Link>
                        <Nav.Link href="#features">Placeholder</Nav.Link>
                        <Nav.Link href="#pricing">Placeholder</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => logout()}>Hello, {user.nickname}! Click here to Log Out!</Nav.Link>
                        &nbsp;
                        <Navbar.Text><img src={user.picture} alt={user.name} height="45px" /></Navbar.Text>
                    </Nav>
                </Navbar>
                {/* <div>
                    <LogoutButton />
                </div> */}
            </div>
        )
    )
}

export default ProfileMain;