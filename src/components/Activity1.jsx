// import Logo from '../images/logo.png';
import ActivityPic1 from '../images/activity/activity1.png';
import ActivityPic2 from '../images/activity/activity2.png';
import ActivityPic3 from '../images/activity/activity3.png';
import ActivityPic4 from '../images/activity/activity4.png';
import ActivityPic5 from '../images/activity/activity5.png';
import ActivityPic6 from '../images/activity/activity6.png';
import ActivityPic7 from '../images/activity/activity7.png';
import ActivityPic8 from '../images/activity/activity8.png';
import ActivityPic9 from '../images/activity/activity9.png';
import ActivityPic10 from '../images/activity/activity10.png';
import ActivityPic11 from '../images/activity/activity11.png';
import ActivityPic12 from '../images/activity/activity12.png';
import ActivityPic13 from '../images/activity/activity13.png';
import ActivityPic14 from '../images/activity/activity14.png';
import ActivityPic15 from '../images/activity/activity15.png';

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
          <div data-src={ActivityPic1} />
          <div data-src={ActivityPic2} />
          <div data-src={ActivityPic3} />
          <div data-src={ActivityPic4} />
          <div data-src={ActivityPic5} />
          <div data-src={ActivityPic6} />
          <div data-src={ActivityPic7} />
          <div data-src={ActivityPic8} />
          <div data-src={ActivityPic9} />
          <div data-src={ActivityPic10} />
          <div data-src={ActivityPic11} />
          <div data-src={ActivityPic12} />
          <div data-src={ActivityPic13} />
          <div data-src={ActivityPic14} />
          <div data-src={ActivityPic15} />
        </AutoplaySlider>
      </div>
    </div>
  );
}

export default Activity1;

// className="mx-auto" style={{ width: '850px' }}
