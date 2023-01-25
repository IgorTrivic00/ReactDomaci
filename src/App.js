import './App.css';
import PocetnaStrana from './komponente/PocetnaStrana';
import NovaPrijava from './komponente/NovaPrijava';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from 'react';

function App() {

    const [prijave, setPrijave] = useState([
      {
          "id": 1,
          "ime": "igor Trivic",
          "pozicija": "Junior Developer",
          "status": "u razmatranju"
      }, {
          "id": 2,
          "ime": "Jovana Bajic",
          "pozicija": "Project Manger",
          "status": "u razmatranju"
      }, {
          "id": 3,
          "ime": "Kristijan Pajic",
          "pozicija": "Junior Developer",
          "status": "odbijen"
      },
    ]);
    const [prijavePrikaz,setPrijavePrikaz]=useState(prijave);
    const [zavrseni, setZavrseni] = useState(vratiZavrsene());
    const [ukupno, setUkupno] = useState(prijave.length);


    function vratiZavrsene() {
        let br = 0;
        prijave.forEach((p) => {
            if (p.status === "zavrsen")
                br++;
        });
        return br;
    }

    function zavrsi(id) {
        prijave.forEach((p) => {
            if (p.id === id) {
                p.status = "zavrsen";
            }
        });
        osveziPocetnu()
    }

    function osveziPocetnu() {
        prijave.forEach((p) => console.log(p))
        setPrijavePrikaz(prijave);
        setPrijavePrikaz(prijave)
        setZavrseni(vratiZavrsene())
        setUkupno(prijave.length)

    }

    function obrisi(id) {
        for (let i = 0; i < prijave.length; i++) {
            if (prijave[i].id === id) {
                prijave.splice(i, 1);
                break;
            }
        }
        osveziPocetnu();
    }

    function generisiId() {
        return prijave.length==0?1:prijave[prijave.length - 1].id + 1
    }

    function dodajPrijavu(e) {
        e.preventDefault();
        prijave.push({
            'id': generisiId(),
            'ime': e.target[0].value,
            'pozicija': e.target[1].value,
            'status': 'cekanje',
        })
        osveziPocetnu();
        e.target.reset();
    }

    /*function pretraga(e){

        let nove=[];
        prijave.forEach((p)=>{
            if(p.naslov.toLowerCase().indexOf(e.target.value.toLowerCase())>-1){
                nove.push(p)
            }
        })
        setPrijavePrikaz(prijave);

    }*/

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<PocetnaStrana prijave={prijavePrikaz} zavrsi={zavrsi} obrisi={obrisi}/>}/>
                <Route path="/novaPrijava" element={<NovaPrijava dodajPrijavu={dodajPrijavu}/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
