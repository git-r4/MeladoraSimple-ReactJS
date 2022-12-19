import {Container} from "react-bootstrap";

//images
import meyveler from '../../../img/meyveler.png';
import terevezler from '../../../img/terevezler.png';
import taxil from '../../../img/taxil.png';

const AllTypeSlider = () => {
    const allTypeData = [
        {
            title: 'Meyvələr',
            image: meyveler
        },
        {
            title: 'Tərəvəzlər',
            image: terevezler
        },
        {
            title: 'Taxıl',
            image: taxil
        }
    ];
    const renderAllType = allTypeData.map(({title, image}, i) => {
        return(
            <div className="allTypeSlider_box" key={i}>
                <div className="allTypeSlider_box_title">
                    <h1>{title}</h1>
                    <p>Daha çox...</p>
                </div>
                <div className="allTypeSlider_box_image">
                    <img src={image} alt={title} />
                </div>
            </div>
        )
    })

    return(
        <>
            <Container>
                <div className="allTypeSlider">
                    {renderAllType}
                </div>
            </Container>
        </>
    )
}
export default AllTypeSlider;