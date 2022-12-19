import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

//components
import { Meladora } from "../../meladoraLogo/meladoraLogo";
import categoryLine from "../../../img/categoryLine.png";

import blogImage1 from '../../../img/blogImage1.png';
import blogImage2 from '../../../img/blogImage2.png';
import blogImage3 from '../../../img/blogImage3.png';

const Blogs = () => {
    const blogData = [blogImage1, blogImage2, blogImage3];
    const renderBlogData = blogData.map((item, i) => {
        return(
            <Col lg={4} md={6} sm={12} className="colMarginBottom" key={i}>
                <div className="blog">
                    <div className="blog_image">
                         <img src={item} alt="blogs" />
                    </div>
                    <ul className="blog_info">
                        <li><h2>Lorem İpsem Doler Sit Amet</h2></li>
                        <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p></li>
                    </ul>
                </div>
            </Col>
        )
    })

    return(
        <Meladora blogClass="blogMeladoraLogo">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} md={12} sm={12}>
                        <div className="categoryBox">
                            <h1>Bloglar</h1>
                            <img src={categoryLine} alt="line" className="categoryLine"/>
                        </div>
                    </Col>
                    {renderBlogData}
                </Row>
            </Container>
        </Meladora>
    )
}
export default Blogs;