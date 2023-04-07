import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initStait = {
    title: "",
    praice: "",
    img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<{
        title: string;
        praice: string;
        img: string;
    }>(initStait);

    const handleCheng = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewPizza({
            ...newPizza,
            [name]: value,
        });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, praice, img } = newPizza;

        if (title && praice && img) {
            addPizza({
                title,
                img,
                praice: Number(praice),
                id: Date.now(),
            });
            setNewPizza(initStait);
        }
    };

    console.log("new pizza>>>", newPizza);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Назва"
                onChange={handleCheng}
                value={newPizza.title}
            />
            <input
                name="praice"
                type="text"
                placeholder="Вартість"
                onChange={handleCheng}
                value={newPizza.praice}
            />
            <input
                name="img"
                type="text"
                placeholder="Зображеня"
                onChange={handleCheng}
                value={newPizza.img}
            />
            <button type="submit">+ Додати до меню</button>
        </form>
    );
};

export default AddPizzaForm;
