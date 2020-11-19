import { useState, useEffect } from 'react';
import axios from "axios";

function Card(props) {

    const [user, setUser] = useState();
    const [boardHome, setBoardHome] = useState();

    // useEffect((e) => {
    //     e.preventDefault();
    //     axios.get("http://localhost:8000/api/testdrag/")
    //         .then((res) => {
    //             setUser(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    const updateBoardHome = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/testdrag/' + props.id, {
            boardHome: props.id
        })
            .then(res => {
                // setBoardHome(boardHome); //THIS IS NOW WORKING YAY! BUT ONLY AFTER SWITCHING TO BOARD TWO THEN BACK.
                console.log(res.data)})
    }

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            onDragStart={dragStart}
            draggable={props.draggable} //can also set this to false to make an object un draggable
            onDragOver={dragOver}
            className={props.className}
            onDragEnd={updateBoardHome}
        >
            { props.children}
        </div>
    )
}

export default Card;

// i need to create a server attribute called 'boardhome' that can be set/changed onChange or onDrop when that card is placed on to a board. Then, i need to reflect in the app.js render, the attribute and that decides how it is displayed...

//maybe do a ternary or conditional on app.js that says if "data.boardhome equals board 1, then display, else null and the same for the other board."