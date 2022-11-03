import Button from "./Button";
import { useState,useEffect } from "react";

const Counter = ({stock, onAdd}) => {
    const [contador, setContador] = useState(0)

    const handleAdd = () => {
        if(contador < stock) {
        setContador(contador + 1)}
    }

    const handleSubstract = () => {
        if(contador > 0) {
        setContador(contador - 1)
        }
    };
    useEffect(()=>{
        console.log(stock)
    },[])
  
    return(
        <div className="grid">
            <Button onClick={()=> handleAdd()}>Sumar</Button>
            <span>{contador}</span>
            <Button onClick={()=> handleSubstract()}>Restar</Button>
            <Button onClick={()=> {
                if(stock - contador !== 0) {
                    onAdd()
                }
            }
            
            }>Agregar al carrito</Button>
        </div>
    );
};

export default Counter