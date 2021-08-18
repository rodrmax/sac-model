import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faCreditCard,
  faBox,
  faShieldAlt,
  faIdCard,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const infor = [
  {
    titulo: "Seus pedidos",
    icon: faBox,
    descricao:
      "Fusce nibh est, luctus quis nibh sit amet, placerat faucibus ante. Sed ut imperdiet felis.",
  },
  {
    titulo: "Devolução e reebolsos",
    icon: faSync,
    descricao: "Fusce nibh est, luctus quis nibh sit amet",
  },
  {
    titulo: "Formas de pagamento",
    icon: faCreditCard,
    descricao:
      "Fusce nibh est, luctus quis nibh sit amet, placerat faucibus ante.",
  },
  {
    titulo: "Suporte serviços digitais",
    icon: faMobileAlt,
    descricao: "Sed ut imperdiet felis.",
  },
  {
    titulo: "Sua conta",
    icon: faIdCard,
    descricao: "Fusce nibh est. Sed ut imperdiet felis.",
  },
  {
    titulo: "Compras online seguras",
    icon: faShieldAlt,
    descricao:
      "Luctus quis nibh sit amet, placerat faucibus ante. Sed ut imperdiet felis.",
  },
];

function Card(props) {
  const { titleCard, cardName, mt4, descCard } = props;
  return (
    <div className={`card ${mt4}`} style={{ width: "26rem" }}>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-around">
          <div name="icon" className="d-flex align-items-center pt-4 pb-4 pe-4">
            <FontAwesomeIcon icon={cardName} size="3x" color="#89b04b" />
          </div>
          <div name="desc" style={{ minWidth: 286, minHeight: 72 }}>
            <h5 className="card-title">{titleCard}</h5>
            <h6 className="card-subtitle mb-2 text-muted" hidden>
              Card subtitle
            </h6>
            <p className="card-text">{descCard}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const MainCards = () => {
  return (
    <div className="container">
      <div className="row justify-content-center justify-content-between">
        {infor.map((item, index) => (
          <Card
            cardName={item.icon}
            titleCard={item.titulo}
            descCard={item.descricao}
            mt4="mt-4"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCards;
