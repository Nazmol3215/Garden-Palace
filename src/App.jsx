import './App.css'
import TrendingAndRecommended from './Components/TrendingAndRecommended'
import ProductGrid from './Components/ProductGrid';
import Footer from './Layout/Fotter';
import PorductDetails from './Components/PorductDetails';
import ScrollToTopButton from './Layout/ScrollToTopButton';
import MarqueeBanner from './Components/ScrollText';
import OrderComponent from './OrderComponent/OrderComponent';



function App() {

  return (
    <>
    <MarqueeBanner/>
< PorductDetails/>      
    <TrendingAndRecommended/>
<ProductGrid/>
<OrderComponent/>
<Footer/>
<ScrollToTopButton/>

    </>
  )
}

export default App;
