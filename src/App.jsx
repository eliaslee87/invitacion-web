import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './App.css'
import PortadaComponent from './components/Portada'
import PrologoComponent from './components/Prologo'
import BannerSuperiorComponent from './components/BannerSuperior'
import ContactoComponent from './components/Contacto'
import CalendarioComponent from './components/Calendario'
import ImageSliderComponent from './components/ImageSlider'
import ModalCoVIDComponent from './components/ModalCoVID'
import BannerMedioComponent from './components/BannerMedio'
import MapaComponent from './components/Mapa'



function App() {


  return (
    <Container fluid="xs" className="App">
      <PortadaComponent />
      <PrologoComponent />
      <BannerSuperiorComponent />
      <ContactoComponent />
      <CalendarioComponent />
      <ImageSliderComponent />
      <BannerMedioComponent />
      <ModalCoVIDComponent />
      <MapaComponent />
    </Container>
  );
}

export default App;
