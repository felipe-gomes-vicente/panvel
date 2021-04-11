import React from "react";
import BannerComponent from "../../components/banner";

import TopBarComponent from "../../components/topbar";

import "./style.scss";

function Home() {
  return (
    <section className="home">
      <TopBarComponent />
      <BannerComponent />
      <div className="blog-content">
        <div className="container">
          <div className="actions">
            <button>
              <span className="material-icons">apps</span>
              Quantidade
            </button>
            <button>
              <span className="material-icons">compare_arrows</span>
              Ordenar
            </button>
          </div>
          <div className="page-intro">
            <h1>What is Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="boxes">
            <div className="vertical-container">
              <div className="box text-box">
                <h1>Where does it come from</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance.
                </p>
              </div>
              <div className="box text-box">
                <h1>Where does it come from</h1>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance.
                </p>
              </div>
            </div>
            <div className="box img-box">
              <h1>
                Why Babys <b>are so cute?</b>
              </h1>
              <div className="img"></div>
            </div>
            <div className="box text-full-box">
              <h1>Where does it come from?</h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
          <div className="footer">
            <span>
              Veja a linha completa de shampoos infantis, acesse{" "}
              <a>Shampoo para Bebê</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
