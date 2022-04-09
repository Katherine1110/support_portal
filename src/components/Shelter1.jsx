import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

// import Logo from '../images/logo.png';
import ShelterPic2 from '../images/shelter/shelter2.png';
import ShelterPic3 from '../images/shelter/shelter3.png';
import ShelterPic4 from '../images/shelter/shelter4.png';
import ShelterPic5 from '../images/shelter/shelter5.png';
import ShelterPic6 from '../images/shelter/shelter6.png';
import ShelterPic7 from '../images/shelter/shelter7.png';
import ShelterPic8 from '../images/shelter/shelter8.png';
import ShelterPic9 from '../images/shelter/shelter9.png';
import ShelterPic10 from '../images/shelter/shelter10.png';
import ShelterPic11 from '../images/shelter/shelter11.png';
import ShelterPic12 from '../images/shelter/shelter12.png';
import ShelterPic13 from '../images/shelter/shelter13.png';
import ShelterPic14 from '../images/shelter/shelter14.png';
import ShelterPic15 from '../images/shelter/shelter15.png';
import ShelterPic16 from '../images/shelter/shelter16.png';

function Shelter1() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="container">
      <div className="mb-5">
        <h1>Сховище, яке ми створили:</h1>
      </div>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div data-src={ShelterPic2} />
        <div data-src={ShelterPic3} />
        <div data-src={ShelterPic4} />
        <div data-src={ShelterPic5} />
        <div data-src={ShelterPic6} />
        <div data-src={ShelterPic7} />
        <div data-src={ShelterPic8} />
        <div data-src={ShelterPic9} />
        <div data-src={ShelterPic10} />
        <div data-src={ShelterPic11} />
        <div data-src={ShelterPic12} />
        <div data-src={ShelterPic13} />
        <div data-src={ShelterPic14} />
        <div data-src={ShelterPic15} />
        <div data-src={ShelterPic16} />
      </AutoplaySlider>
    </div>
  );
}

export default Shelter1;
