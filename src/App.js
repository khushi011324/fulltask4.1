import './App.css';
import Header from './Header'
import Image from './Image'
import Articles from './Articles'
import CardList from './CardList'
import See from './See'
import NewArticles from './NewArticles'
import SeeNew from './SeeNew'
import CardListNew from './CardListNew'
import HeaderNew from './HeaderNew'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header text="Dev@Deakin" />
       <Image />
      <Articles/>
      <CardList />
     <See/>
    <NewArticles/>
    <CardListNew />
    <SeeNew/>
   <HeaderNew text ="SIGN UP FOR OUR DAILY USER"/>
    <Footer/>
    </div>
  );
}

export default App;
