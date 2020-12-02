import { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import axios from "axios";
import styles from '../styles/KanbanBoardMain.module.css';
import { Link } from '@reach/router';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";
const KanbanBoardMarketing = () => {

    const [candidate, setCandidate] = useState([]);
    const { logout, user, isAuthenticated } = useAuth0();
    const [company, setCompany] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/candidates/1")
            .then((res) => {
                setCandidate(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

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
        <div>
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
            <main>
                <h1>Marketing - (Jr. Development Engineer) Applicants</h1>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Backlog</h3>
                    <Board id="backlog" className={styles.board}>
                        <Card
                            key={candidate.id}
                            id={candidate.id}
                            className={styles.card}
                            draggable="true"
                        >
                            <div>
                                <p className={styles.p}>Name: {candidate.first_name} {candidate.last_name}</p>
                                <p className={styles.p}>Email: {candidate.email}</p>
                                <p className={styles.p}>Applied for: {candidate.role}</p>
                                <p className={styles.p}>Total Interviews: {candidate.interviews_had}</p>
                            </div>
                        </Card>
                    </Board>
                </div>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Ready to Go</h3>
                    <Board id="ready-to-go" className={styles.board}>
                        <Card>
                        </Card>
                    </Board>
                </div>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>In Progress</h3>
                    <Board id="in-progress" className={styles.board}>
                        <Card>
                        </Card>
                    </Board>
                </div>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Completed</h3>
                    <Board id="Completed" className={styles.board}>
                        <Card>
                        </Card>
                    </Board>
                </div>
            </main>
            </div>
            <Link to="/profile">Return to Profile</Link>
        </div>
    );
}

export default KanbanBoardMarketing;