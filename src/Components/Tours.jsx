import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'

export default function Tours() {
  return (
    <>
      <section className="section" id="tours">
        <Title title='featured' subTitle='tours' />

        <div className="section-center featured-center">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
          ))}
        </div>
      </section>
    </>
  )
}

/*
Esuite travaillons sur la section touristique ou l'idee est essentiellement la meme, nous voulons recherche des donnees
repetitif et nous voulons les rendre dynamiques.
Essentiellemnt, chaque tour va etre assis dans l'article.

Desormais vous n'avez plus besoin de definir toutes les valeur unique, l'idee de cette video et de ce projet est de vous mettre a l'aise
avec la mise en place des donnees et ensuite l'iteration. Ainsi par exemple si vous n'avez pas envie de definie des valeur uniques, il suffit de
faire un copier coller 
*/

