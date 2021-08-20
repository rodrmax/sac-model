import React from "react";

const TopicsComponents = () => {
  return (
    <div className="container">
      <div className="row align-items-start mt-4">
        <div className="p-0 mb-3">
          <h4>Dúvidas frequentes</h4>
        </div>
        <div className="d-flex justify-content-between p-0 pb-4">
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tópicos recomendados</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
               
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Dúvidas frequentes </h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
               
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Soluções rapidas</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsComponents;
