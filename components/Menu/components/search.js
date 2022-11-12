import * as React from "react";
import { StyledSearch } from "../components/compstyles/searchstyles";

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;
    return (

        <StyledSearch>
            <input type="text" placeholder="Encontre o que precisa..." onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
            <button>🔍</button>
        </StyledSearch>

    )

}