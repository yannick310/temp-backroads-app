import { socialLink } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

export default function Footer() {
  return (
    <>
    <footer className="section footer">
      {/* <ul className="footer-links">
        
          {pageLinks.map((link)=>{
            return(<>
            <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li>
            </>)
          })}
          
      </ul> */}
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>
      {/* si vous utilisez un composant pour la liste entiere vous devez configurer et passer les props */}
      <ul className="footer-icons">
        
                  {socialLink.map((link)=>{
                    
                    return(
                      <SocialLink key={link.id} {...link} itemClass='footer-icon' />
                    )
                  })}
                  

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    </>
  )
}
