import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faCreditCard, faBox, faShieldAlt, faIdCard, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const { titleCard, cardName } = props;

  return (
    <div className="card" style={{ width: "26rem" }}>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-around">
          <div name="icon" className="d-flex align-items-center pt-4 pb-4 pe-4">
            <FontAwesomeIcon icon={cardName} size="3x" color="#89b04b" />
          </div>
          <div name="desc">
            <h5 className="card-title">{titleCard}</h5>
            <h6 className="card-subtitle mb-2 text-muted" hidden>
              Card subtitle
            </h6>
            <p className="card-text">
            Fusce nibh est, luctus quis nibh sit amet, placerat faucibus ante. Sed ut imperdiet felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const MainActions = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center justify-content-between">
        <Card cardName={faBox} titleCard="Seus pedidos" />
        <Card cardName={faSync} titleCard="Devolução e reebolsos" />
        <Card cardName={faCreditCard} titleCard="Formas de pagamento" />
      </div>
      <div className="row justify-content-center justify-content-between mt-4">
        <Card cardName={faMobileAlt} titleCard="Suporte serviços digitais" />
        <Card cardName={faIdCard} titleCard="Sua conta" />
        <Card cardName={faShieldAlt} titleCard="Compras online seguras" />
      </div>
    </div>
  );
};

export default MainActions;
