import React from 'react'

function NovaPrijava({dodajPrijavu}) {
    const stil={width:40+'vw',marginLeft:'auto',marginRight:'auto'}
    return (
        <div>
            <form style={stil} onSubmit={dodajPrijavu}>
                <h2> Dodaj novu prijavu</h2>
                <div className="mb-3">
                    <label htmlFor="imeAdd" className="form-label">Ime</label>
                    <input type="text" name="ime" className="form-control" id="imeAdd" />

                </div>
                <div className="mb-3">
                    <label htmlFor="pozicijaAdd" className="form-label">Pozicija</label>
                    <textarea id="pozicijaAdd" name="sadrzaj" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Dodaj</button>
                <button type="reset" className="btn btn-secondary">Resetuj</button>
            </form>
        </div>
    );
}

export default NovaPrijava
