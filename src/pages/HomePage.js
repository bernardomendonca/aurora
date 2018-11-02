import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div id="homePage">
        {/* SECTION 1 */}
        <div className="pimg1">
          <div className="ptext">
            <span className="border">SUSHI BRASILEIRO AGORA EM MELBOURNE</span>
          </div>
        </div>

        <section className="section section-dark">
          <h1>Sushi com carinha de Brasil</h1>
          <hr />
          <p>
            O sushi já é uma tradição centenária, mas e o sushi brasileiro? A
            nossa releitura do prato tradicional japonês já é um sucesso
            mundial. Cream cheese e spring onions dão o toque refrescante,
            somados ao salmão clássico e a opção grelhada. Oferecemos uma
            variedade de rolls e temakis que unem o tradicional ao inovador. A
            incorporação dos ingredientes cotemporâneos é feita de maneira
            balanceada a manter a unidade do sabor tradicional japonês, com
            respeito a escolha de ingredientes frescos e de qualidade.
          </p>
        </section>

        {/* SECTION 2 */}
        <div className="pimg2">
          <div className="ptext">
            <span className="border">PICK UP ou DELIVERY</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Localizados em Prahan</h2>
          <hr />
          <h3>
            {" "}
            Nosso canal do whatsapp e facebook está aberto pra pedidos até as
            13h. A partir das 19h o pick-up está disponível e o delivery começa
            a ser feito
          </h3>
          <br />
          <p>
            Estamos localizados no coração de Prahan, pertinho da estação de
            trem de Prahan e do Victoria Gardens.
          </p>
        </section>

        {/* SECTION 3 */}
        <div className="pimg3">
          <div className="ptext">
            <span className="border"> FLEXIBILIDADE E FUNCTIONS </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Functions e pedidos especiais?</h2>
          <hr />
          <p>
            Se tem algo que você não conseguiu encontrar em nosso cardápio,
            temos prazer de explorar novos pratos e opções. Entre em contato
            para mais informações.
            <br />
            Tem alguma function e precisa de um pedido maior? Entre em contato
            com antecedência para discutirmos as possibilidades.
          </p>
        </section>
      </div>
    );
  }
}

export default HomePage;
