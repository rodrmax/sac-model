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
  }
];

function Card(props) {
  const { titleCard, cardName, mt4, descCard } = props;
  return (
    <div className={`card ${mt4}`} style={{ width: "26rem" }}>
      <div className="card-body">
        <a
          className="text-muted nounderline text-decoration-none"
          href="/#"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <div className="d-flex flex-row justify-content-start">
            <div
             style={{ minWidth: 72}}
              name="icon"
              className="d-flex justify-content-start pt-4 pb-4 pe-4"
            >
              <FontAwesomeIcon icon={cardName} size="3x" color="#89b04b" />
            </div>
            <div name="desc">
              <h5 className="card-title font-color-green">{titleCard}</h5>
              <h6 className="card-subtitle mb-2 text-muted" hidden>
                Card subtitle
              </h6>
              <p className="card-text font-color-green">{descCard}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

const MainCards = () => {
  return (
    <>
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

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* INICIO ACCORDION */}
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Collapsible Group Item #1
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Collapsible Group Item #2
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Collapsible Group Item #3
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
               {/* FINAL ACCORDION */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCards;
