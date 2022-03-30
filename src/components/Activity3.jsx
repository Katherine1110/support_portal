import Logo from '../images/logo.png';
import Collage3 from '../images/collage3.png';

function Activity3() {
  return (
    <>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <h2>Наша діяльність в фото:</h2>

      {/* Gallery3  */}
      <div>
        <img src={Collage3} alt="Our activity" />
      </div>
      {/* Gallery3 */}
    </>
  );
}

export default Activity3;
