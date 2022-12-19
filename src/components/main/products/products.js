import React, {startTransition, useCallback} from "react";
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import categoryLine from "../../../img/categoryLine.png";

//components
import { productsData } from "./productsData";
import { Meladora } from "../../meladoraLogo/meladoraLogo";

const Products = () => {
    const [typeProduct, setTypeProduct] = useState('all');
    const typeData = ['All', 'Fruit', 'Vegetable', 'Grain', 'Other'];
    const renderType = typeData.map((type, i) => {
        return(
            <button key={i}
                    type="button"
                    onClick={() => setTypeProduct(typeProduct => type.toLowerCase())}
                    className={typeProduct === type.toLowerCase() ? 'active' : null}>
                {type}
            </button>
        )
    })
    const conditionType = (products) => {
        if(typeProduct === 'all'){
            return products
        }else if(products.type === typeProduct){
            return products
        }
    }

    const renderData = productsData.filter(prod => conditionType(prod)).map(({id, img, name, type, price}) => {
        return(
            <Col lg={3} md={4} sm={12} key={id} className="colMarginBottom">
                <div className={`${typeProduct === type ? "filterAnimation" : null} products`}>
                    <div className="products_image">
                        <img src={img} alt={name} />
                    </div>
                    <div className="products_info">
                        <ul className="products_info_box">
                            <li><h3>{name}</h3></li>
                            <li><h4>{price} ₼</h4></li>
                        </ul>
                    </div>
                </div>
            </Col>
        )
    })
    return(
        <Meladora>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="categoryBox">
                            <h1>Məhsullarımız</h1>
                            <img src={categoryLine} alt="line" className="categoryLine"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} className="colMarginBottom">
                        <div className="products_selectBox">
                            {renderType}
                        </div>
                    </Col>
                </Row>
                <Row>
                    {renderData}
                </Row>
            </Container>
        </Meladora>
    )
}
export default Products;