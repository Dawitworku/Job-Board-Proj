import { useState, useEffect } from 'react';
import Board from './components/Board';
import Card from './components/Card';
import axios from "axios";

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/testdrag/")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <main className="flexbox">
        {/* <Board id="board-0" className="board-0"> */}
        <Board id="board-1" className="board">

        </Board>

        <Board id="testboard-2" className="board">
        {user.map(data => (
            <Card key={data._id} id={data._id} className="card" draggable="true"> 
              <div>
                <p>{data.firstName}</p>
                <p>{data.job}</p>
                <p>{data.boardHome}</p>
              </div>
            </Card>
          ))}
        </Board>
        {/* </Board> */}
      </main>
    </div>
  );
}

export default App;


// right now the data, when moved to another board, still "belongs" to board one, and doesnt actually change to board 2.


//obama - board 1 state array, board 2 state array ... have a smart component above the board and cards. when they load the smart component organizes them into the correct board. and then that data goes into the server. and create a server part for the boards, they will reload how they were supposed to be "long term persistance", the state use within the project is the "short term persistance". can have a snapshot of the arrays saved to server on the close of the browers, or whatever i want.

//{board1: ["2ac47h", "47hzT124"], board2: ["77241", "9ac4k5"]} - car id goes into the arrays.

// App.js, then smart comp, then card/boards.