import React from 'react'
import {AiOutlineFileDone, AiOutlineFileSearch, AiOutlineSolution} from "react-icons/ai";
import StatstikaPrikaz from './StatstikaPrikaz';

function Statistika({zavrseni,ukupno}) {
  return (
    <div>
      <div className="row justify-content-md-center">
           <StatstikaPrikaz className="col" ikona={<AiOutlineFileDone size={40} />} tekst="Primljeni: " br={zavrseni} />
           <StatstikaPrikaz className="col" ikona={<AiOutlineFileSearch size={40} />} tekst="U razmatranju: " br={ukupno-zavrseni} />
           <StatstikaPrikaz className="col" ikona={<AiOutlineSolution size={40} />} tekst="Ukupno: " br={ukupno} />
       </div>
    </div>
  )
}

export default Statistika
