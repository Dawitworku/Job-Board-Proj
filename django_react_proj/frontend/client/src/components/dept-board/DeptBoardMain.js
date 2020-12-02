import { useState, useEffect } from 'react';
import Board from './Board';
import CardMarketing from './CardMarketing';
import CardSales from './CardSales';
import CardIt from './CardIt';
import axios from "axios";
import styles from '../styles/KanbanBoardMain.module.css';
import { Link } from '@reach/router';

const KanbanBoardMain = (props) => {

    const [marketing, setMarketing] = useState([]);
    const [sales, setSales] = useState([]);
    const [it, setIt] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/roles/3/")
            .then((res) => {
                setMarketing(res.data);
                console.log(`marketing res.data: ${res.data.id}`)
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/roles/2/")
            .then((res) => {
                setSales(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/api/roles/1/")
            .then((res) => {
                setIt(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <main>
                <h1>Tesla Roles with Applicants Waiting</h1>
                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Marketing Department</h3>
                    <Board id="marketing-roles" className={styles.board}>
                            <CardMarketing
                                key={marketing.id}
                                id={marketing.id}
                                className={styles.card}
                                draggable="true"
                            >
                                <div>
                                    <h5 className={styles.h5}><b>{marketing.title}</b></h5>
                                    <p className={styles.p}>Dept: {marketing.department}</p>
                                    <p className={styles.p}>Description: {marketing.description}</p>
                                </div>
                            </CardMarketing>
                        
                    </Board>
                </div>

                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Sales Department</h3>
                    <Board id="sales-roles" className={styles.board}>
                            <CardSales
                                key={sales.id}
                                id={sales.id}
                                className={styles.card}
                                draggable="true"
                            >
                                <div>
                                    <h5 className={styles.h5}><b>{sales.title}</b></h5>
                                    <p className={styles.p}>Dept: {sales.department}</p>
                                    <p className={styles.p}>Description: {sales.description}</p>
                                </div>
                            </CardSales>
                        
                    </Board>
                </div>

                <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>IT Department</h3>
                    <Board id="it-roles" className={styles.board}>
                            <CardIt
                                key={it.id}
                                id={it.id}
                                className={styles.card}
                                draggable="true"
                            >
                                <div>
                                    <h5 className={styles.h5}><b>{it.title}</b></h5>
                                    <p className={styles.p}>Dept: {it.department}</p>
                                    <p className={styles.p}>Description: {it.description}</p>
                                </div>
                            </CardIt>
                        
                    </Board>
                </div>
                
                {/* <div className={styles.boardWrapper}>
                    <h3 className={styles.h3}>Sales</h3>
                    <Board id="backlog" className={styles.board}>
                        {board1.map(data => (
                            <Card
                                key={data.id}
                                id={data.id}
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
                                key={data.id}
                                id={data.id}
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
                                key={data.id}
                                id={data.id}
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
                </div> */}
            </main>
            {/* <Link to="/profile">Return to Profile</Link> */}
        </div>
    );
}

export default KanbanBoardMain;