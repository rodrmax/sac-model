import React from "react";

const HeaderTop = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 25, backgroundColor: "rgb(136, 176, 75)" }}
      ></div>

      <div className="shadow-sm p-3 mb-4 rounded">
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ height: 50, backgroundColor: "#fff" }}
        >
          <div className="d-flex">
            <span className="text-dark">
              <h3>Atendimento (SAC)</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
