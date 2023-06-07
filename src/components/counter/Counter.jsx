import { useState } from "react";
import Button from "./button/Button";


const Counter = () => {
	const [counter, setCounter] = useState(0);

	
	console.log(counter);
	return (
	<>
	<h1>{counter}</h1>
    <Button text="sumar" handleClick={()=>sumar(counter, setCounter)}/>
    <Button text="restar" handleClick={()=>restar(counter, setCounter)}/>
    <Button text="reset" handleClick={()=>reset(counter, setCounter)}/>
	</>
	);
};
const sumar = (counter, setCounter) => {
    setCounter(counter+1);
};
const restar = (counter, setCounter) => {
    setCounter(counter-1);
};
const reset = (stcounterate, setCounter) => {
    setCounter(0);
};
export default Counter;