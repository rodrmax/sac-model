import React from "react";
import { useHistory } from 'react-router-dom'

import MainCards from "../../components/sac/maincards-component";
import SubCards from "../../components/sac/subcards-component";
import HeaderTop from "../../components/header";
import FindComponent from "../../components/sac/search-component";
import TopicsComponent from "../../components/sac/topics-component";

import queryString from 'query-string'

import { FrequentDoubtBG } from '../../components/util/colorBrand'
import BrandEnum from '../../components/util/brand'

function Sac() {

  const history = useHistory()
  //Get value query string
  const { marca } = queryString.parse(history.location.search)

  const colorBgDoubt = FrequentDoubtBG(marca)

  const marcaEnum = BrandEnum();
  
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
              <MainCards canal={marca} />
            </div>
          </div>
          <div
            className="d-flex flex-column mt-4"
            style={{ backgroundColor: `${colorBgDoubt}` }}
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

        <footer className={marca === marcaEnum.p ? `footer mt-4` : marca === marcaEnum.ex ? `footer-ex mt-4` : `footer-withoutB mt-4`}>
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
