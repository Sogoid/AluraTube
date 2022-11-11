import * as React from "react";
import styles from "../../../styles/search.module.css"
import styled from "styled-components"


export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;
    return (
        <>
            <div className={styles.buscainput}>
                <style jsx>{`
                            div{
                                border: 1px solid ${({ theme }) => theme.borderBase};                            
                            }          
                        `}</style>

                <input className={styles.imput} type="text" placeholder="Encontre o que precisa..." onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
                <style jsx>{`
                            input{
                                color: ${({ theme }) => theme.textColorBase};
                                background-color: ${({ theme }) => theme.backgroundBase};                            
                            }          
                        `}</style>
                <button className={styles.buttom}>🔍</button>
                <style jsx>{`
                            button{
                                background-color: ${({ theme }) => theme.backgroundLevel2};
                                box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
                                border-left: 1px solid ${({ theme }) => theme.borderBase};  
                                border-color: 1px solid ${({ theme }) => theme.borderBase};
                                border-bottom-color: ${({ theme }) => theme.backgroundLevel1};                         
                            }          
                        `}</style>
            </div>
        </>
    )

}