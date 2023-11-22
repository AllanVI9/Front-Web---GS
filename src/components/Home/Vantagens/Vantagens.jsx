
import { MdOutlineSecurity } from "react-icons/md";
import { FaWalkieTalkie } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";

const data = [
  {
    title: 'Aprimoração da segurança ',
    text: 'Hoje em dia os dados são as coisas mais importantes para se proteger na internet, por isso o foco é na utilização de recursos e aprimoração deles para proteção dos dados',
    img: <MdOutlineSecurity />
  },
  {
    title: 'Comunicação eficiente',
    text: 'Para um bom trabalho, temos que ter uma comunicação eficiente, para isso uma tecnologia para auxiliar na comunicação foi implementada.',
    img: <FaWalkieTalkie />
  }, {
    title: 'Tecnologias emergentes',
    text: 'Integração de tecnologias atuais para uso de mecanicas novas e inovadoras com o intuito da melhora na usabilidade e praticidade',
    img: <GrCloudSoftware />
  }
]
function Vantagens() {
  return (
    <section className="vantagens">
      <div className="additional-info">
        {data.map((info, index) => (
          <div key={index} className="info">
            <h3>{info.title}</h3>
            {info.img}
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Vantagens;
