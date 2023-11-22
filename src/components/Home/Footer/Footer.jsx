import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const icons = [<FaInstagram />, <FaGithub />, <FaTwitter />];

function Footer() {
  return (
    <footer>
      <div>
        <p>Tenha uma vida melhor e nos siga em nossas redes sociais</p>
      </div>
      <div className="icons">
        {icons.map((icon, index) => (
          <ul key={index}>
            <li>{icon}</li>
          </ul>
        ))}
      </div>
    </footer>
  );
}
export default Footer;
