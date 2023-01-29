import React from 'react'

function Kompanija(props) {
  return (
    <div className='kompanija'>
      <h4>{props.kompanija.naziv}</h4>
      <h6>{props.kompanija.adresa}</h6>
      <h6>{props.kompanija.email}</h6>
      <h6>{props.kompanija.website}</h6>
    </div>
  )
}

export default Kompanija
