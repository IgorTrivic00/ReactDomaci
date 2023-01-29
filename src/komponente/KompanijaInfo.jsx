import React from 'react'
import axios from 'axios'
import {useState} from 'react';
import {useEffect} from 'react';
import Kompanija from './Kompanija';

function KompanijaInfo() {
    const [kompanija, setKompanija] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/kompanija/5').then(res => {
            console.log('Rezultat: ' + JSON.stringify(res.data.data))
            setKompanija(res.data.data)
            
        });
    }, []);


    return (
        <div className="studenti-lista-div">
           <Kompanija key={kompanija.id} kompanija={kompanija} />
        </div>
    );
}

export default KompanijaInfo
