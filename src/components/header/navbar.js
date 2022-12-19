import { Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

//components
import logo from '../../img/navbarLogo.png';

const Navbarr = () => {
    return(
        <Navbar expand="lg" className="zIndexUp">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="Navbar-Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><FaBars /></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Biz kimik?</Nav.Link>
                        <Nav.Link href="/">Bağlarımız</Nav.Link>
                        <Nav.Link href="/">Məhsullarımız</Nav.Link>
                        <Nav.Link href="/">Xidmətlərimiz</Nav.Link>
                        <Nav.Link href="/">Sosial məsuliyyət</Nav.Link>
                        <Nav.Link href="/">Əlaqə</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbarr;
