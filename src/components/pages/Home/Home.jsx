import "./home.scss";
import iconWelcome from "../../../image/image_boas_vindas.svg";
import iconInfo1 from "../../../image/icon_info1.svg";
import iconInfo2 from "../../../image/icon_info2.svg";
import iconInfo3 from "../../../image/icon_info3.svg";
import focoImage from "../../../image/home_image_two.svg"

const Home = () => {
  return (
    <div className="container-home">
      <h1>Página Home</h1>
    
      <div className="welcome-container">

        <div className="text-welcome">
          <h2>Bem-vindo(a) à <span className="welcome-span">WolfStack</span> </h2>
          <p>
            Contrate já a sua empresa 
            de gerenciamento de software.
          </p>
        </div>

        <img className="image-welcome" src={iconWelcome}/>
      </div>

      <div className="welcome-info">
        <div className="wolf-info">
          <img className="welcome-info-img" src={iconInfo1} />
          <h3>O que é a Wolf Stack</h3>

          <p>
            Somos uma equipe de Desenvolvimento Web perfeita para a sua empresa.
          </p>
        </div>

        <div className="wolf-info">
          <img className="welcome-info-img" src={iconInfo2}/>
          <h3>Desenvolvimento de apicações</h3>

          <p>
            As melhores práticas de UX/UI design e programação web/mobile para construir o seu produto.
          </p>
        </div>

        <div className="wolf-info">
          <img className="welcome-info-img" src={iconInfo3}/>
          <h3>Concepção</h3>

          <p>
            Conte conosco para implementar soluções digitais inovadoras e planejar o melhor produto viável.
          </p>
        </div>
      </div>

      <div className="Second-Home-Section">
        <div className="Text-Second-Section">
          <h2>
            Foque no seu negócio. <br/>
            Deixe-nos cuidar dos programas
          </h2>

          <p>
            Pare de se preocupar com bugs entre navegadores, 
            criando novas páginas e mantendo seus componentes atualizados. 
            Deixe-nos fazer isso por você.
          </p>
        </div>

        <img className="focoImage" src={focoImage} />
        
      </div>      
      
    </div>
  );
  
};
export default Home;
