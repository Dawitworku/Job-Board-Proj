import { useState, useEffect } from 'react';
import axios from "axios";
import { navigate } from '@reach/router';

function CardSales(props) {

    const [roles, setRoles] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/roles/2")
            .then((res) => {
                setRoles(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

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

    const onClickSales = props => {
        navigate("/kanban/sales");
        console.log(roles.id);
    }

    return (
        <div
            id={props.id}
            onDragStart={dragStart}
            draggable={props.draggable} //can also set this to false to make an object un draggable
            onDragOver={dragOver}
            className={props.className}
            onClick={onClickSales}
        >
            { props.children}
        </div>
    )
}

export default CardSales;

// i need to create a server attribute called 'boardhome' that can be set/changed onChange or onDrop when that card is placed on to a board. Then, i need to reflect in the app.js render, the attribute and that decides how it is displayed...

//maybe do a ternary or conditional on app.js that says if "data.boardhome equals board 1, then display, else null and the same for the other board."