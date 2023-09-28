import React, { useState } from "react";
import Card from "./Card";
import styles from './ItemList.module.css';
import dummyData from "../Dummy/DummyData";

function ItemList() {
    const [items, setItems] =useState(dummyData);

  return(
    <div className={styles.container}>
        <div className="row">
            {items.map((a, i) => {
                return <Card items={items[i]} i = {i}/>
            })}
        </div>
    </div>
  )
}

export default ItemList;
