import React from "react";

function LongCard(props) {

    const { titleCard, imagem, cardtype } = props
  return (
    <div className="card p-0" style={{ width: "19rem" }}>
      <img src={`../assets/imagem/${imagem}`} className="card-img-top" alt="imagem" style={{maxHeight:151}}/>
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
      {cardtype !== "bot" ? (
        <div className="card-body">
        <a href="/#" className="card-link">
          Card link
        </a>
        <a href="/#" className="card-link">
          Another link
        </a>
      </div>
      ): (
        <div className="card-body text-center">
          <button name="suportbot" className="btn btn-success white" onClick={() => {}}>Chatbot do Pão</button>
        </div>
      )}
      
    </div>
  );
}

const SubCards = () => {
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center justify-content-between">
        <LongCard titleCard="Atendimento virtual" imagem="bot_.png" cardtype="bot"/>
        <LongCard titleCard="Central de atendimento do site" imagem="central_atendimento_site.png"/>
        <LongCard titleCard="Central de atendimento das lojas" imagem="central_atendimento.png"/>
        <LongCard titleCard="Central de atendimento cartão fidelidade" imagem="compra-online.png"/>
      </div>
    </div>
  );
};

export default SubCards;
