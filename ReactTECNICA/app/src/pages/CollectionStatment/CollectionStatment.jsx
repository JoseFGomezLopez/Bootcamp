import './collection.css' 

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'

const CollectionStatment = () => {
  
  const {setType} = useContext(TypeContext);
  setType('Collection Statement')
  
  return (
    <section className="collection">
      Dear , This is just a friendly reminder that your account is past due.
      According to our records your balance of $ is currently . We have emailed
      a detailed copy of your account statements. In the event you have not
      received these messages and documents, we have provided a summary of your
      account below. Invoice number: Invoice Date: Amount: Due Date: Days past
      due: We would much appreciate if you could let us know the status of this
      payment. Please contact us or send your payment of $ to the address below
      by November 7, 2022 if you have not already done so. ATTN: Accounting Dept.
      If there is some error or you are unable to pay at this time, please
      contact me at so we can correct any errors or arrange for another payment
      plan. Thank you for your prompt response to this request and for your
      continued business. Sincerely,
    </section>
  )
}

export default CollectionStatment
