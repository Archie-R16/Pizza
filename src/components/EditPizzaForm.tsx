import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
    data: Pizza;
    upDataPizza: (nevPizza: Pizza) => void;
    hendleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
    data,
    upDataPizza,
    hendleToggleEdit,
}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const handleCheng = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEditPizza({
            ...editPizza,
            [name]: value,
        });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, praice, img } = editPizza;
        if (title && praice && img) {
            upDataPizza(editPizza);
            hendleToggleEdit();
        }
    };

    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Назва"
                onChange={handleCheng}
                value={editPizza.title}
            />
            <input
                name="praice"
                type="text"
                placeholder="Вартість"
                onChange={handleCheng}
                value={editPizza.praice}
            />
            <input
                name="img"
                type="text"
                placeholder="Зображеня"
                onChange={handleCheng}
                value={editPizza.img}
            />
            <button type="submit">Затвердити</button>
        </form>
    );
};

export default EditPizzaForm;
