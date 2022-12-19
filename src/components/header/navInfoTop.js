import { Container, Row, Col } from 'react-bootstrap';

//icons
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';

const NavInfoTop = () => {
    const iconData = [
      <FaFacebookF/>,
      <FaLinkedinIn/>,
      <FaTwitter/>,
      <FaInstagram/>,
      <FaYoutube/>
    ];
    const renderIcons = iconData.map((item, i) => {
       return(
           <li key={i}>
               {item}
           </li>
       )
    });

    return(
        <>
            <Container>
                <div className="navInfo">
                    <div className="navInfo_phoneNum">
                        <BsFillTelephoneFill />
                        <p>+994 (70) 777 77 77</p>
                    </div>
                    <div className="navInfo_socialNet">
                        <ul>
                            {renderIcons}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default NavInfoTop;