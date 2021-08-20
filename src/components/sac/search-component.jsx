import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FindComponent = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="input-group flex-nowrap p-0">
          <span className="input-group-text" id="addon-wrapping">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Exemplo: Busca por pedido"
            aria-label="Find"
            aria-describedby="addon-wrapping"
          />
          <button name="find" type="button" className="btn btn-success" onClick={() => {}}>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default FindComponent;
