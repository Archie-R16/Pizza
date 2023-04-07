import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";
import Pizza from "../models/Pizza";

interface SinglePizzaProps {
    pizza: Pizza;
    upDataPizza: (nevPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
    pizza,
    upDataPizza,
    deletePizza,
}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const hendleToggleEdit = () => {
        setEdit(!edit);
    };
    const handleDelete = () => {
        deletePizza(pizza.id);
    };

    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.praice} ₴грн</span>
            <div className="pizza-controls">
                <AiFillEdit onClick={hendleToggleEdit} />
                <AiFillDelete onClick={handleDelete} />
            </div>
            {edit ? (
                <EditPizzaForm
                    data={pizza}
                    upDataPizza={upDataPizza}
                    hendleToggleEdit={hendleToggleEdit}
                />
            ) : null}
        </div>
    );
};

export default SinglePizza;
