import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BrandEnum from '../../components/util/brand'
import { useHistory } from 'react-router-dom';
import  { BrandQueryString } from '../util/brand' 

const FindComponent = (props) => {
  
  const history = useHistory()

  const marca = BrandQueryString(history);

  const marcaEnum = BrandEnum();
  
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
          <button name="find" type="button"  className={marca === marcaEnum.p ? `btn btn-success white` : marca === marcaEnum.ex ? `btn btn-danger white` : `btn btn-secondary white`} onClick={() => {}}>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default FindComponent;
