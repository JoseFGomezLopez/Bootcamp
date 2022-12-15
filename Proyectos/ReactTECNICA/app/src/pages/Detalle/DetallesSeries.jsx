import './detalle.css'
import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useContext } from 'react'
import TypeContext from '../../Context/TypeContext'
import FigureDetail from '../../components/Figures/FigureDetail'

const DetalleSeries = () => {
  const { setType } = useContext(TypeContext)

  const { titleParam } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        `http://localhost:3000/entries?title=${titleParam}`,
      )
      const data = await res.json()
      setItem(data[0])
      setType(data[0].title)
    })()
  }, [])
  return (
    <section className="sectionDetallesSeries">
      {item ? (
        <FigureDetail
          title={item.title}
          description={item.description}
          releaseYear={item.releaseYear}
          className={'sectionDetailCard'}
        />
      ) : (
        <h2>No way</h2>
      )}
    </section>
  )
}

export default DetalleSeries
