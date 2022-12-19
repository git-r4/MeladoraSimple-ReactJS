import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//components
import categoryLine from '../../../img/categoryLine.png';

import gar2 from '../../../img/garden1.jpg';
import gar1 from '../../../img/garden2.jpg';
import gar3 from '../../../img/garden3.jpg';

const Garden = () => {
    const gardenData = [
        {
            id: 1,
            number: 'I',
            title: 'Bağ',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
            image: gar1
        },
        {
            id: 2,
            number: 'II',
            title: 'Bağ',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
            image: gar2
        },
        {
            id: 3,
            number: 'III',
            title: 'Bağ',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
            image: gar3
        }
    ];
    const renderGarden = gardenData.map(({id, number, title, description, image}) => {
        return(
            <React.Fragment key={id}>
                <div className="garden">
                    <div className="garden_image">
                        <img src={image} alt={title} />
                        <div className="garden_image_darkenImg"></div>
                    </div>
                    <ul>
                        <li><h2>{number}</h2></li>
                        <li><h1>{title}</h1></li>
                        <li><p>{description}</p></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    })

    return(
        <>
            <Container fluid style={{padding: 0}}>
                <div className="categoryBox">
                    <h1>Bağlarımız</h1>
                    <img src={categoryLine} alt="line" className="categoryLine"/>
                </div>
                <div className="gardenReplace">
                    {renderGarden}
                </div>
            </Container>
        </>
    )
}
export default Garden;