import Logo from '../images/logo.png';
import Collage2 from '../images/collage2.png';

function Activity2() {
  return (
    <>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <h2>Наша діяльність в фото:</h2>

      {/* Gallery2  */}
      <div>
        <img src={Collage2} alt="Our activity" />
      </div>
      {/* Gallery2 */}
    </>
  );
}

export default Activity2;
