import MainCards from "../../components/sac/main-cards";
import SubCards from "../../components/sac/sub-cards";
import HeaderTop from "../../components/header";
import FindComponent from '../../components/sac/find-component';

function Sac() {
  return (
    <>
      <div className="container-flud">
        <div className="#">
          {/* Header */}
          <HeaderTop />

          <div className="d-flex flex-column">
            <div className="container p-0">
              <h3>Olá, como posso ajudar?</h3>
            </div>
            <MainCards />
          </div>
          <div className="d-flex flex-column">
            <SubCards />
          </div>
          <div className="d-flex flex-column">
            <FindComponent />
          </div>
        </div>

        <footer className="footer mt-4">
          <div className="d-flex justify-content-center">
            <span>
              <strong>MOCKUP SAC</strong>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Sac;
