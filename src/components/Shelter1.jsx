import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function Shelter1() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="container">
      <div className="mb-5">
        <h1>Сховище, яке ми створили:</h1>
      </div>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter2.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter3.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter4.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter5.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter6.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter7.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter8.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter9.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter10.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter11.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter12.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter13.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter14.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter15.png" />
        <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/shelter16.png" />
      </AutoplaySlider>
    </div>
  );
}

export default Shelter1;
