import logo_bw from '../images/logo_bw.png';
import ubicacion from '../images/ubicacion.png';
import mail from '../images/mail.png';
import tel from '../images/tel.png';
import Image from 'react-bootstrap/Image'
import '../index.css'

const Footer = () => {
    return (
        <footer id="footer" className="navbar bg-dark">
        <div className="container">
                <div >
                  <Image src={logo_bw} class="imgfooter"/>
                </div>
                <div id="centrofooter">
                  <Image src={ubicacion} width="25" className="foot"/>
                        Beiro 3300 - Villa del Parque
                  <br></br>
                    <Image src={mail}  width="25" className="foot"/>
                        contacto@sanitarioscampana.com.ar
                  </div>
                <div className="celular">
                        <Image src={tel} width="30"/>
                      2380-6927
                   
                </div>
            </div>
        
      
    </footer>
    )
}

export default Footer;