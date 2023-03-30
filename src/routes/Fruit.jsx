import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import FruitList from "./FruitList.jsx";

const Fruit = (fruit) => {

    const {id, title} = fruit;

    return (
        <div>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
        </div>
    );
}




export default Fruit;