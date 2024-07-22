import './App.scss'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Banner_text from './components/Banner_text'
import Cards from './components/Cards'
import Logo from './assets/airbnb 1.png'
import Group from './assets/Group 77.png'
import Cardimg1 from './assets/image 12.png'
import Cardimg2 from './assets/wedding-photography 1.png'
import Cardimg3 from './assets/mountain-bike 1.png'
import star from './assets/Star 1.png'


function App () {
  return (
    <div className="frame">
       <div className="frame--container">
      <Navbar img={Logo}/>
      <Banner Group ={Group}/>
      <Banner_text />
      <div className="cards-scroller">
        <Cards Cardimg={Cardimg1} star={star}/>
      <Cards Cardimg={Cardimg2} star={star}/>
      <Cards Cardimg={Cardimg3} star={star}/>
      </div>



    </div>
    </div>
   
  );
}

export default App
