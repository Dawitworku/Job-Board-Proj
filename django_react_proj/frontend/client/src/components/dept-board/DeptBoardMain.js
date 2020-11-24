import { useState, useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import axios from "axios";
import styles from '../styles/KanbanBoardMain.module.css';
import { Link } from '@reach/router';

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
                <h1>This is the department board that shows the departments and their roles.</h1>
                <h2>Roles need to be created.</h2>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Marketing</h3>
                    <Board id="backlog" className={styles.board}>
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
                    <h3 className={styles.h3}>Sales</h3>
                    <Board id="backlog" className={styles.board}>
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
                    <h3 className={styles.h3}>IT Dept.</h3>
                    <Board id="backlog" className={styles.board}>
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
                    <h3 className={styles.h3}>HR</h3>
                    <Board id="backlog" className={styles.board}>
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
            </main>
            <Link to="/kanban">Link to Kanban Board (which will later happen by clicking on boxes above).</Link>
        </div>
    );
}

export default KanbanBoardMain;