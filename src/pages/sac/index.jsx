import MainCards from "../../components/main-cards";
import SubCards from "../../components/sub-cards";
import HeaderTop from '../../components/header';

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
        </div>
      </div>

      <footer className="footer" hidden>
        <div className="d-flex justify-content-center">
          <p>
            App Test Sac <strong>Mx</strong>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Sac;
