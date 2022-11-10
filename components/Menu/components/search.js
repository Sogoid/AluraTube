import * as React from "react";



export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;
    return (
        <>
            <div className='buscainput'>
                <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />

                <button>🔍</button>
            </div>
        </>
    )

}