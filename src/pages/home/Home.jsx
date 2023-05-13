import Banner from "./Banner";
import Blog from "./Blog";
import FeatureProducts from './FeatureProducts';
import MoreProducts from "./MoreProducts";
import NewArrivals from "./NewArrivals";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div style={{marginTop: '4rem'}}>
            <Banner/>
            <FeatureProducts/>
            <MoreProducts/>
            <NewArrivals/>
            <Testimonials/>
            <Blog/>
        </div>
    );
};

export default Home;