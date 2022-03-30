import Logo from '../images/logo.png';
import Bicycle from '../images/bicycle.png';

function Intro() {
  return (
    <div className="container">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <div className="card">
        <div className="card-body">
          <p>
            Діяльність Громадської організації «Портал Підтримки України» спрямована на підтримку
            суспільства та Збройних Сил України під час російської агресії проти України та після
            перемоги, на відновлення нашоЇ країни.
          </p>
          <p>
            Маємо своє текстильне виробництво в Києві. Працюємо з укриттями, фондами, волонтерами,
            державними установами, ЗСУ та ТерОбороною.
          </p>
        </div>
        <img className="img-fluid" src={Bicycle} alt="Bicycle" />
      </div>
    </div>
  );
}

export default Intro;
