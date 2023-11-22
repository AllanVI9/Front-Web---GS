import Vantagens from "./Vantagens/Vantagens";
import { Grids } from "./Grid/Grid";
import Ftinicio from "/Ftinicio.jpg";
import Footer from "./Footer/Footer";

const Menu = () => {
  return (
    <>
      <section className="about-project">
        <div className="text">
          <h2>HealthCare</h2>
          <p>
            Um sistema de monitoramento remoto acessível e intuitivo, proporcionando aos profissionais de saúde um controle eficaz sobre os registros médicos eletrônicos.
          </p>
          <a href="/login">Login</a>
        </div>
        <div className="img">
          <img src={Ftinicio} alt="" />
        </div>
      </section>
      <p
        title="Informações"
        caption="Sua vida fica mais prática"
        text="
        Usando a nossa tecnologia, terá um dia muito menos desgastante e muito mais prático, resolvemos suas necessidades."
      />
      <Grids />
      <p title='Informações' caption="Monitoramento adequado dos pacientes" text='' />
      <Vantagens />
      <Footer />
    </>
  );
};
export default Menu;
