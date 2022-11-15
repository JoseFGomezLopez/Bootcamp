import './privacyPolicy.css' 

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'

const PrivacyPolicy = () => {

  const {setType} = useContext(TypeContext);
  setType('Privacy Policy')

  return (
    <section className="privacyPolicy">
      En la actualidad es prácticamente imposible gestionar un sitio web sin
      recopilar datos. Por ello todo sitio web debería contar con su política de
      privacidad. De esta forma, no solo evitarás posibles sanciones, sino que
      también estarás proporcionando un importante servicio a tus visitantes.
      Nosotros y nuestros socios almacenamos o accedemos a información en un
      dispositivo, tales como cookies, y procesamos datos personales, tales como
      identificadores únicos e información estándar enviada por un dispositivo,
      para anuncios y contenido personalizados, medición de anuncios y del
      contenido e información sobre el público, así como para desarrollar y
      mejorar productos. Con su permiso, nosotros y nuestros socios podemos
      utilizar datos de localización geográfica precisa e identificación
      mediante las características de dispositivos. Puede hacer clic para
      otorgarnos su consentimiento a nosotros y a nuestros socios para que
      llevemos a cabo el procesamiento previamente descrito. De forma
      alternativa, puede acceder a información más detallada y cambiar sus
      preferencias antes de otorgar o negar su consentimiento. Tenga en cuenta
      que algún procesamiento de sus datos personales puede no requerir de su
      consentimiento, pero usted tiene el derecho de rechazar tal procesamiento.
      Sus preferencias se aplicarán solo a este sitio web. Puede cambiar sus
      preferencias en cualquier momento entrando de nuevo en este sitio web o
      visitando nuestra política de privacidad.
    </section>
  )
}

export default PrivacyPolicy
