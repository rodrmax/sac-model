import React from "react";

import { HeaderFooter } from './util/colorBrand';

const HeaderTop = (props) => {

  const { canal } = props
  
  const color = HeaderFooter(canal)

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 25, backgroundColor: `${color}` }}
      ></div>

      <div className="shadow-sm p-3 mb-4 rounded">
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: 50, backgroundColor: "#fff" }}
        >
          <div className="d-flex">
            <span className="text-dark">
              <h3>Autoatendimento (SAC)</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
