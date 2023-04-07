import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import DisplaiPizzas from "./components/DisplaiPizzas";
import Pizza from "./models/Pizza";
import "./App.css";

const App: FC = () => {
    const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzaList([...pizzaList, newPizza]);
    };
    const upDataPizza = (newPizza: Pizza) => {
        setPizzaList(
            pizzaList.map((pizza) =>
                pizza.id === newPizza.id ? newPizza : pizza
            )
        );
    };

    const deletePizza = (id: number) => {
        const newPizzaList = pizzaList.filter((pizza) => pizza.id !== id);
        setPizzaList(newPizzaList);
    };

    // console.log("pizzaList >>>>>", pizzaList);
    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Моя піцерія</span>
                <AddPizzaForm addPizza={addPizza} />
                <DisplaiPizzas
                    pizzaList={pizzaList}
                    deletePizza={deletePizza}
                    upDataPizza={upDataPizza}
                />
            </div>
        </div>
    );
};

export default App;
