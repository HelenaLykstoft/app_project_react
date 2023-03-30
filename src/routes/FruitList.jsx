import React, {useState} from 'react';
import Fruit from "./Fruit.jsx";
import PropTypes from "prop-types";


function FruitList ({fruits}) {
    return (
        <div>
            {fruits.map(fruit =>
                <Fruit
                    key={fruit.id}
                    id={fruit.id}
                    title={fruit.title}
                />)}
        </div>
    );
}

FruitList.propTypes = {
    fruits: PropTypes.array.isRequired
}
export default FruitList;