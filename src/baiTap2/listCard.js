import React from 'react';
import ItemCard from './itemCard';

function ListCard() {
    return(
        <div className="container">
            <div className="row container">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
        </div>
        
    )
}
export default ListCard;