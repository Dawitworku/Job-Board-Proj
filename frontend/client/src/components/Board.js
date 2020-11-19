import { useState, useEffect } from 'react';
import axios from "axios";

function Board (props) {

    const [user, setUser] = useState();

    useEffect((e) => {
        axios.get("/api/companies" + props.id)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);

    }

    const dragOver = e => {
        e.preventDefault();
    }


    return (
        <div 
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
            >
            { props.children }        
        </div>
    )
}

export default Board;

//can put the card onDrop in here

//board.js could change the state and card.js could change the server info

//also may be a way to share data between siblings, check google.