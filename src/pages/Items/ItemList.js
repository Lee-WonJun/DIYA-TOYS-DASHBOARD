import React from "react";
import { Composition } from "atomic-layout";
import Item from "./Item";


const ItemList = ({ data }) =>(
    <Composition
    templateCols="repeat(auto-fit, 250px)"
    templateColsMd="repeat(2, 1fr)"
    templateColsLg="repeat(auto-fit, minmax(250px, 1fr))"
    justifyContent="center"
    gutter={15}
    gutterLg={25}>
        {data.map(item => (
            <Item key={item.id} {...item} />
        ))}

    </Composition>
)

export default ItemList