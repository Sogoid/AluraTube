import styles from "../../styles/footer.module.css"
import { styled } from "styled-components";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <style jsx>{`
                   div{
                    background-color: ${({ theme }) => theme.backgroundLevel1 || "#e5e5e5"};
                    border: 0px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
                    }          
                `}</style>
            <span>Rodapé</span>
        </div>
    );
}
