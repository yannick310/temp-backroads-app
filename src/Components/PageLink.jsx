
function PageLink({link, itemClass}) {
  return (
    <li>
        <a href={link.href} className={itemClass}> {link.text} </a>
    </li>
  )
}

export default PageLink

/*
La difference actuelle est qu'au lieu de renvoyer ces elements dans le service, nous avons un composant supplementaire
et nous voulons maintenant faire la meme chose pour les liens sociaux ainsi que pour les lien de page.

Encore une fois j'utiliser cette approche parce qu'elle me fait gagner du temps sur la saisie.

Le lien est egalment a unlien puisque maintenant nous somme dans la structure en gros on accede a l'objet
*/