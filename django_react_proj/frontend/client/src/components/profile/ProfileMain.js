import React, {useEffect, useState} from "react";
import axios from 'axios'
import DeptBoardMain from '../dept-board/DeptBoardMain'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import styles from '../styles/KanbanBoardMain.module.css'
import { useAuth0 } from "@auth0/auth0-react";

const ProfileMain = () => {

    const { logout, user, isAuthenticated } = useAuth0();
    const [company, setCompany] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/companies/1")
            .then((res) => {
                setCompany(res.data);
                console.log("company data - " + res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Company Data</Popover.Title>
            <Popover.Content>
            <h5>Company Name: {company.name}</h5>
            <h6>City: {company.city}</h6>
            <h6>Phone Number: {company.phone}</h6>
            </Popover.Content>
        </Popover>
    );
    const CompanyData = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose="true">
            <Button variant="success" className={styles.btn}>Show Company Info</Button>
        </OverlayTrigger>
    );  
    return (
        isAuthenticated && (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Welcome to Job Boards!</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <CompanyData />
                        <Nav.Link onClick={() => logout()}>Hello, {user.nickname}! Click here to Log Out!</Nav.Link>
                        &nbsp;
                        <Nav.Link><img src={user.picture} alt={user.name} height="45px" /></Nav.Link>
                    </Nav>
                </Navbar>
                <DeptBoardMain />
            </div>
        )
    )
}

export default ProfileMain;