
function Service({ icon, title, text}) {
  return (
    <article className="service">
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
              {text}
            </p>
          </div>
        </article>
  )
}

export default Service

/*
Deplacez les element que nous retournons en iterant sur la liste vers des composants separes

Maintenant je veux enlever cette clef parce que nous allons importer ce composant, le composant service
dans service et iterer dessus.

Maintenant encore une fois si vous le passez comme un objet c'est tout a fait correct.
Rappelez-vous juste la reference, l'objet, et encore une fois allez y avec le nom du point de l'objet ou juste la
structure ici dans le service
*/