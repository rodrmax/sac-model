import React from "react";

const TopicsComponents = () => {
  return (
    <div className="container">
      <div className="row align-items-start mt-4">
        <div className="p-0 mb-3">
          <h4>Dúvidas frequentes</h4>
        </div>
        <div className="d-flex justify-content-between p-0 pb-4 row-cols-1 row-cols-auto">
          <div className="card-group">
            <div className="card col-auto">
              <div className="card-body">
                <h5 className="card-title">Tópicos recomendados</h5>
                <div className="card-text">
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Envio e entrega
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Cancelamento
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Pedidos
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Privacidade
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Precisa de mais ajuda?
                  </a>
                </div>
              </div>
            </div>
            <div className="card col-auto">
              <div className="card-body">
                <h5 className="card-title">Dúvidas frequentes </h5>
                <div className="card-text">
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Parcelamento no cartão
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Boleto
                  </a>
                </div>
              </div>
            </div>
            <div className="card col-auto">
              <div className="card-body">
                <h5 className="card-title">Soluções rapidas</h5>
                <div className="card-text">
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Pedido e pagamento
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Devolução
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Produto do site
                  </a>
                  <a
                    href="/#"
                    className="clearfix text-muted nounderline text-decoration-none"
                  >
                    - Minha conta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsComponents;
