import React from "react";
import { useHistory } from 'react-router-dom';
import queryString from 'query-string'
import BrandEnum from '../../components/util/brand'

function LongCard(props) {
  const { titleCard, imagem, cardtype, margin, marca } = props;
  const marcaEnum = BrandEnum();

  return (
    <div className={`card p-0 mb-3 ${margin}`} style={{ width: "19.8rem" }}>
      <img
        src={`../assets/imagem/${imagem}`}
        className="card-img-top"
        alt="imagem"
        style={{ maxHeight: 200 }}
      />
      <div className="card-body">
        <h5 className="card-title">{titleCard}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          faucibus erat ac nunc pretium lobortis.
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
      ) : (
        <div className="card-body text-center">
          <button
            name="suportbot"
            className={marca === marcaEnum.p ? `btn btn-success white` : marca === marcaEnum.ex ? `btn btn-danger white` : `btn btn-secondary white`}
            onClick={() => {}}
          >
            Chatbot
          </button>
        </div>
      )}
    </div>
  );
}

const SubCards = (props) => {


  const history = useHistory()
  //Get value query string
  const { marca } = queryString.parse(history.location.search)

  return (
    <div className="container">
      <div className="row mt-4 justify-content-center col-xs-12">
        <LongCard
          titleCard="Atendimento virtual"
          imagem="bot_.png"
          cardtype="bot"
          margin="me-3"
          marca={marca}
        />
        <LongCard
          titleCard="Central de atendimento do site"
          imagem="central_atendimento_site.png"
          margin="me-3"
          marca={marca}
        />
        <LongCard
          titleCard="Central de atendimento das lojas"
          imagem="central_atendimento.png"
          margin="me-3"
          marca={marca}
        />
        <LongCard
          titleCard="Central de atendimento cartão fidelidade"
          imagem="fidelidade.png"
          marca={marca}
        />
      </div>
    </div>
  );
};

export default SubCards;
