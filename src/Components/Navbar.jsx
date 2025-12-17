import logo from '../assets/images/logo.svg'
import {socialLink} from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        {/* si vous utilisez un composant pour la liste entiere vous devez configurer et passer les props */}
        

        <ul className="nav-icons">
          {socialLink.map((link)=>{
            
            return(
              <SocialLink key={link.id} {...link} itemClass='nav-icon'/>
            )
          })}
          
        </ul>
      </div>
    </nav>
    </>
  )
}




