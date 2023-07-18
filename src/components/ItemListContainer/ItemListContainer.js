import { useState } from "react";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, img }) => {

    const [ count, setCount] = useState(0);

        function handleClickPlus(){ 
            setCount(count+1);
        }
        function handleClickSubtract(){ 
            if(count>=1){
                setCount(count-1) ;
            }
        }
    return (
        
        <div className="card">
            
            <img className="card-img-top" src={img} alt="Card image cap"/>

            <div className="card-body">
            <h1 className="card-title">{greeting}</h1>
            <button className="btn btn-outline-danger" onClick={handleClickSubtract}>-</button>

            <span className="likes">Likes {count}</span>
            <button className="btn btn-outline-danger" onClick={handleClickPlus}>+</button>

            </div>
        </div>
    )
}

export default ItemListContainer;