import React from "react";

function LongCard(props) {

    const { titleCard } = props
  return (
    <div className="card p-0" style={{ width: "18rem" }}>
      <img src="../assets/imagem/bg-green.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{titleCard}</h5>
        <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus erat ac nunc pretium lobortis.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="/#" className="card-link">
          Card link
        </a>
        <a href="/#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

const SubCards = () => {
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center justify-content-between">
        <LongCard titleCard="Atendimento virtual"/>
        <LongCard titleCard="Central de atendimento do site"/>
        <LongCard titleCard="Central de atendimento das lojas"/>
        <LongCard titleCard="Central de atendimento cartão fidelidade"/>
      </div>
    </div>
  );
};

export default SubCards;
