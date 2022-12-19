
//components
import NavInfoTop from "../header/navInfoTop";
import Navbarr from "../header/navbar";
import AllTypeSlider from "../main/allTypeSlider/allTypeSlider";
import About from "../main/about/about";
import Garden from "../main/garden/garden";
import Products from "../main/products/products";
import Blogs from "../main/blogs/blogs";
import Footer from "../footer/footer";

//styles
import '../../style/style.scss';
import '../../style/responsive.scss';
import '../../bootstrapStyle/bootstrap.min.css';
import '../../bootstrapStyle/bootstrap-grid.min.css.map';

const App = () => {
    return(
        <div className="app">
            <div className="app_header">
                <NavInfoTop />
                <Navbarr />
            </div>
            <div className="app_main">
                <AllTypeSlider />
                <About />
                <Garden />
                <Products />
                <Blogs />
            </div>
            <div className="app_footer">
                <Footer />
            </div>
        </div>
    )
}
export default App;