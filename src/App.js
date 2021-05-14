import GlobalStyle from './styles/globals';
import Intro from './components/Intro';
import FirstContent from './components/FirstContent';
import SecondContent from './components/SecondContent';
import ThirdContent from './components/ThirdContent';
import Footer from './components/Footer';

function App() {
  return ( 
    <>
    <GlobalStyle/>
    <Intro/>
    <FirstContent/>
    <SecondContent/>
    <ThirdContent/>
    <Footer/>
    </>
  );
}

export default App;
