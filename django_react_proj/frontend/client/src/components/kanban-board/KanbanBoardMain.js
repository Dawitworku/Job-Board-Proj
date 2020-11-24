import { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import axios from "axios";
import styles from '../styles/KanbanBoardMain.module.css';
import {Link} from '@reach/router';

const KanbanBoardMain = () => {

    const [board1, setBoard1] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/departments")
            .then((res) => {
                setBoard1(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <main>
                <h1>This is supposed to show the created kanban applicants, but for now displaying departments to test server.</h1>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Backlog</h3>
                    <Board id="backlog"className={styles.board}>
                        {board1.map(data => (
                            <Card
                                key={data._id}
                                id={data._id}
                                className={styles.card}
                                draggable="true"
                            >
                                <div>
                                    <p>{data.name}</p>
                                    <p>{data.job}</p>
                                </div>
                            </Card>
                        ))}
                    </Board>
                </div>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Ready to Go</h3>
                    <Board id="ready-to-go"className={styles.board}>
                            <Card>
                            </Card>
                    </Board>
                </div>
            </main>
            <Link to="/profile">Back to Profile Page</Link>
        </div>
    );
}

export default KanbanBoardMain;