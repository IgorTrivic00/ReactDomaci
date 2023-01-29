import React from 'react'

function JednaPrijava({prijava,zavrsi,obrisi}) {
  return (
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{prijava.ime}</h5>
                <p className="card-text">{prijava.pozicija}</p>
                <button className="btn btn-success card-link" onClick={()=>zavrsi(prijava.id)}>Primi kandidata</button>
                <button className="btn btn-danger card-link" onClick={()=>obrisi(prijava.id)}>Odbij</button>
            </div>
            <div className="card-footer text-muted">
                Status: {prijava.status}
            </div>
        </div>
    </div>
  );
}

export default JednaPrijava

