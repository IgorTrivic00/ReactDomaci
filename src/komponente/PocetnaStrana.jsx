import React from 'react'
import AdministratorPrikaz from './KompanijaInfo';
import JednaPrijava from './JednaPrijava';
import KompanijaInfo from './KompanijaInfo';

function PocetnaStrana({prijave,zavrsi, obrisi}) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-3 g-3">

                {prijave.map((prijava)=>(
                    <JednaPrijava prijava={prijava} key={prijava.id} zavrsi={zavrsi} obrisi={obrisi}/>
                ))}

            </div> 
            <div className='kompanija-info'>
                <KompanijaInfo/>
            </div>
        </div>
    );
}

export default PocetnaStrana
