import { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import axios from "axios";
import styles from '../styles/KanbanBoardMain.module.css';
import { Link } from '@reach/router';

const KanbanBoardMarketing = () => {

    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/candidates/1")
            .then((res) => {
                setCandidate(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
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
            <Link to="/profile">Return to Profile</Link>
        </div>
    );
}

export default KanbanBoardMarketing;