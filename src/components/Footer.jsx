import '../Styles/Footer.scss'

import Logii from '../asseets/images/dog-logo.png'

function Footer() {
    return(
        <div className="footer">
            <div><img className='footer-logo' src={Logii} alt="logo" /></div>
            <div>
                <h3>Contact</h3>
                <span>+38971222701</span>
                <span>Adress</span>
                </div>
            <div>
               <h3>Address</h3> 
                </div>
        </div>
    )
}


export default Footer