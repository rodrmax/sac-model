import { useState } from "react";
import { useHistory } from 'react-router-dom'

import MainCards from "../../components/sac/maincards-component";
import SubCards from "../../components/sac/subcards-component";
import HeaderTop from "../../components/header";
import FindComponent from "../../components/sac/search-component";
import TopicsComponent from "../../components/sac/topics-component";


function Sac() {
  
  const [marca] = useState('')

  const history = useHistory()

  console.log('Print History ==> ', history)
  
  // useEffect(() => {
  //   setMarca("pa-o")
  // }, [marca])
  
  return (
    <>
      <div className="container-flud">
        <div className="#">
          {/* Header */}
          <HeaderTop canal={marca} />
          <div className="col-12 col-md-12 col-xl-12 bd-content">
            <div className="d-flex flex-column">
              <div className="container p-0">
                <h4 className="m-0">Olá, como posso ajudar?</h4>
              </div>
              <MainCards />
            </div>
          </div>
          <div
            className="d-flex flex-column mt-4"
            style={{ backgroundColor: "rgba(136, 176, 75, 0.1)" }}
          >
            <div className="col-12 col-md-12 col-xl-12 bd-content">
              <FindComponent canal={marca} />

              <TopicsComponent canal={marca}  />
            </div>
          </div>
          <div className="col-12 col-md-12 col-xl-12 bd-content">
            <div className="d-flex flex-column">
              <SubCards canal={marca}  />
            </div>
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
