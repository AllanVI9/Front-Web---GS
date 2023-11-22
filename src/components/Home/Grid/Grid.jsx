import { detailsData, requirementsData } from "./Grid-content";

export const Grids = () => {
  return (
    <div className="cards-body">
      <section className="main-section">
        <div className="project-description">
          <section className="project-info">
            <div className="info-description">
              <h2>Health Care</h2>
            </div>
            <div className="info-details">
              {detailsData.map((detail, index) => (
                <div key={index} className="detail">
                  <p>{detail.p}</p>
                  <span>{detail.span}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="bottom-card">
            <div className="name">
              <img src="/saude.png" alt="saude" />
            </div>
            <div className="card">
              <h3>Monitoramento dos batimentos cardiacos do paciente</h3>
              <p>
                Monitore seus pacientes por meio da tecnologia e equipamentos de ponta, conseguindo saber sempre o estado de saúde atual do próprio.
              </p>
            </div>
          </section>
        </div>

        <div className="requirements">
          {requirementsData.map((data, index) => (
            <div key={index} className="card">
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
