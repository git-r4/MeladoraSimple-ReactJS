import { Container, Row, Col } from 'react-bootstrap';

//components
import bizKimik from '../../../img/bizkimik.png';
import line from '../../../img/categoryLine.png';

import leafLine from '../../../img/leafLine.png';

import path1 from '../../../img/path1.png';
import path2 from '../../../img/path2.png';
import path3 from '../../../img/path3.png';
import path4 from '../../../img/path4.png';

const About = () => {
    const bizKimikData = [
        {
            id: 1,
            title: "Organik",
            image: path1
        },
        {
            id: 2,
            title: "Məmnuniyyət",
            image: path2
        },
        {
            id: 3,
            title: "Lorem",
            image: path3
        },
        {
            id: 4,
            title: "Yüksək keyfiyyət",
            image: path4
        }
    ];
    const renderBizKimik = bizKimikData.map(({id, title, image}) => {
        return(
            <li key={id}>
                <div>
                    <img src={image} alt={title} />
                </div>
                <h5>{title}</h5>
            </li>
        )
    })

    return(
        <>
            <Container fluid>
                <Row>
                    <Col lg={5} md={5} sm={12} className="colPadding displayNone colMarginBottom">
                        <div className="about_image">
                            <img src={bizKimik} alt="BizKimik" />
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12} className="colPadding colMarginBottom">
                        <div className="about_info">
                            <ul className="about_info_ulBox">
                                <li>
                                    <h1>Biz Kimik?</h1>
                                    <img className="categoryLine" src={line} alt="line" />
                                </li>
                                <li className="about_info_ulBox_descriptionBackLogo">
                                    <p>Əslində hər şey illər əvvəl İsmayıllı rayonunda  ailəvi gəzintidə olduğumuz zaman baş verdi. İsmayıllı rayonunun füsunkar təbiətinin gözəlliyi bizim bir gün burda kənd təsərufatı ilə məşqul olmaq arzusunu oyatdı. Daha sonra dostlarımızla bu məsələni müzakirə edərək İsmayıllıda təsəruffat qurmağa qərar verdik.
                                        Böyük uğurlar vaxtında və yerində verilən qərarlarla çox bağlıdır.
                                        Elə bizdə ilk səfərdə qərar verdik və başladıq.İllər çox serətli keçdi.Bizdə böyümədə zamanın sürətindən geri qalmadıq.Qısa zaman müddətində əldə etdiyimiz uğurlar və daha sürətlə böyüməyə davam etməyimiz işimizə olan sevginin göstəricisidir.
                                        Alma,armud,nektarin,gavalı,gilas və qoz yetişdirməklə qalmadıq,tingçilik və toxumçuluqla məhsul sıramızı genişləndirdik.
                                        qısa zamanda ən son texnoloji yeniliklərlə damla suvarma sistemlərinin qurulması BAĞLARIN layihələndirilməsi,salınması kimi çətin işlərin ödəsindən uğurla gəldik.
                                        2022 ci ildə əsas  hədəfimiz brendimizin "made in AZERBAİJAN" adına layiq ölkə kənarında rəflərdə görünməsidir.
                                        növbəti hədəfləri sizlərlə paylaşmaq arzusuyla.
                                        <br /><br />hörmətlə MELADORA kollektivi!</p>
                                    <div className="descLine">
                                        <img src={leafLine} alt="bigLeafLine" />
                                    </div>
                                </li>
                                <li>
                                    <ul>
                                        {renderBizKimik}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default About;