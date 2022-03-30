import Logo from '../images/logo.png';
import Collage1 from '../images/collage1.png';

function Activity1() {
  return (
    <>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <h2>Наша діяльність в фото:</h2>

      {/* Gallery1  */}
      <div>
        <img src={Collage1} alt="Our activity" />
      </div>
      {/* Gallery1 */}
    </>
  );
}

export default Activity1;
