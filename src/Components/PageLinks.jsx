import {pageLinks} from '../data'
import PageLink from './PageLink'
function PageLinks({parentClass, itemClass}) {
  return (
    <ul className={parentClass} id="nav-links">
          {pageLinks.map((link)=>{
            return(<>
            <PageLink key={link.id} link={link} itemClass={itemClass} />
            </>)
          })}
          
        </ul>
  )
}

export default PageLinks

/*
Avant de nous preocuper du deploiement examinons l'approche alternative en ce qui concerne la mise en place des composant et
les problemes qui en decouleront.

Mais quelque chose dont je veux que tu sois conscient, nous pouvons certainement le diviser en plusieur composants le resultat sera
exatement le meme. Soyez simplement conscient des compromis a faire dans ce cas
*/