import React from "react"
import ItemList from "./ItemList"
import items from './items.json'

const Items = () => (
    <>
        <h1>DIYA</h1>
        <ItemList data={items} />
    </>
)

export default Items