import React, { FC } from "react";
import SinglePizza from "./SinglePizza";
import Pizza from "../models/Pizza";

interface DisplaiPizzasProps {
    pizzaList: Pizza[];
    upDataPizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const DisplaiPizzas: FC<DisplaiPizzasProps> = ({
    pizzaList,
    upDataPizza,
    deletePizza,
}) => {
    return (
        <div className="container">
            {pizzaList.map((pizza) => {
                return (
                    <SinglePizza
                        key={pizza.id}
                        deletePizza={deletePizza}
                        upDataPizza={upDataPizza}
                        pizza={pizza}
                    />
                );
            })}
        </div>
    );
};

export default DisplaiPizzas;
