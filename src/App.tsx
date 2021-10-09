import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";

function App() {

    const [inc, setInc] = useState<number>(0)

    const setIncPlus = () => inc < 5 ? setInc(inc + 1) : false

    return (
        <div className="App">
           <Counter setIncPlus={setIncPlus} inc={inc} setInc={setInc} />
        </div>
    );
}

export default App;
