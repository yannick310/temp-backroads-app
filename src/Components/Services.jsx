import Title from './Title'
import { service } from '../data'
import Service from './Service'

export default function Services() {
  return (
    <>
    <section className="section services" id="services">
      <Title title='Our' subTitle='Service' />
      <div className="section-center services-center">
        {service.map((services)=>{
          
          return (
            <>
            <Service key={services.id} {...services} />
            </>
          )
        })}
        
      </div>
    </section>
    </>
  )
}

//Nous devons passer dans la cle parce que c'est ici que nous iterons sur la liste


