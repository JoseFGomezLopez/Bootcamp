import './manage.css' 

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'

const ManageAccount = () => {

  const {setType} = useContext(TypeContext);
  setType('Manage Account')

  return (
    <section className="manage">
      Gestionar aplicaciones y servicios de terceros con acceso a tu cuenta Para
      que puedas compartir tus datos de forma segura, Google te permite conceder
      a aplicaciones y servicios de terceros acceso a distintas partes de tu
      cuenta de Google. Las aplicaciones y servicios de terceros pertenecen a
      empresas o desarrolladores que no forman parte de DEMO STREAMING. Por ejemplo, si
      descargas una aplicación para programar sesiones de entrenamiento con tus
      amigos, es posible que esta te solicite acceso a Google Calendar y a
      Contactos de Google para sugerirte fechas en las que quedar con ellos.
    </section>
  )
}

export default ManageAccount
