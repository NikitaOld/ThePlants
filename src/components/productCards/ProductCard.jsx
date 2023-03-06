import React, {useState} from 'react';
import style from "../../pages/ProductsPage";
import NewArrivalsItem from "../newArrivals/NewArrivalsItem";

const ProductCard = ({item}) => {

    return (
        <div className={style.productCard}>
            <img src={`/resources/img/${item.image}`} alt=""/>
            <div className={style.cardTextBlock}>
                <p className={style.title}>{item.name}</p>
                <p className={style.price}>{item.price}₽</p>
            </div>
        </div>
    );
};

export default ProductCard;