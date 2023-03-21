import './footer.sass';
import WolfStackName from '../../../image/WolfStack_name.svg';
import instagramIcon from '../../../image/instagram_icon.svg';
import whatsAppIcon from '../../../image/whatsApp_icon.svg';
import facebookIcon from '../../../image/facebook_icon.svg';

const Footer = () => {
    return (
        <footer className="Container-Footer">
            <hr />
            <div className="Footer-Contant">
                <div className="Footer-Sociais">
                    <img src={WolfStackName} alt="WolfStack name" className="Footer-Logo-Name"/>
                
                    <br />
                    <img src={instagramIcon} alt="Icone do instagram " className="Footer-Icon"/>
                    <img src={whatsAppIcon} alt="Icone do WhatsApp " className="Footer-Icon"/>
                    <img src={facebookIcon} alt="Icone do Facebook " className="Footer-Icon"/>
                    {/* <hr /> */}

                </div>
                
                <div className="Footer-Info">
                    
                    <div className="Footer-Empresa">
                        <h3>Empresa</h3>

                        <p>Termos e condições</p>
                        <p>Políticas de privacidade</p>
                    </div>

                    <div className="Footer-Novidades">
                        <h3>Novidades</h3>

                        <p>Mercando 3.6</p>
                        <p>Delivery 15.7</p>
                    </div>
                </div>

            </div>
            
            <div className="Footer-Bottom">
                <h4>Entre em contato</h4>
                <h4>Gerenciar cookies</h4>
                <h4> &#169; WolfStack 2023</h4>

            </div>

        </footer>
        
    );
}
export default Footer;