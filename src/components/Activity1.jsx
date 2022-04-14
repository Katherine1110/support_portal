import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function Activity1() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="container">
      <div className="mb-4">
        <h1>Наша діяльність в фото:</h1>
      </div>
      <div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}>
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity1.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity2.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity3.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity4.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity5.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity6.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity7.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity8.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity9.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity10.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity11.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity12.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity13.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity14.png" />
          <div data-src="https://support-portal-for-ukraine.s3.eu-central-1.amazonaws.com/images/activity15.png" />
        </AutoplaySlider>
      </div>
    </div>
  );
}

export default Activity1;

// className="mx-auto" style={{ width: '850px' }}
