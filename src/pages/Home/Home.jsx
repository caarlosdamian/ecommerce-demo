import Announcement from "../../components/Announcement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/";

const Home = () => {
  return (
    <div>
      <Announcement />

      <Navbar />{" "}
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
