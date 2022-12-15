import './termsConditions.css'

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'

const TermsConditions = () => {

  const{setType} = useContext(TypeContext);
  setType('Terms & Conditions')

  return (
    <section className='termsConditions'>
      Los términos y condiciones de uso deben estar perfectamente claros a la
      hora de trabajar con tu negocio online. Si no cuentas con conocimientos
      específicos en la materia, lo mejor es que acudas a verdaderos
      especialistas del sector para que todo salga a la perfección. En Términos
      y Condiciones ponemos todos los medios que están en nuestras manos para
      dar al cliente la respuesta más completa. Somos verdaderos profesionales
      en el asesoramiento jurídico online, así que no dudes en ponerte en
      contacto con nosotros, si lo que buscas es que tu negocio cumpla con todo
      lo exigido en la normativa legal vigente. Si quieres contar con unos
      términos y condiciones de uso perfectamente redactados y que no causen
      ningún tipo de problema a tu negocio online, te estamos esperando. Son
      muchos los que ya han recurrido a nuestros servicios, quedando
      completamente satisfechos. Confía en nuestra experiencia y trayectoria
      dentro del sector. Te estamos esperando.
    </section>
  )
}

export default TermsConditions
