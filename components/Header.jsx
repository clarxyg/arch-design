import styles from '../styles/Header.module.css'


export function Header() {
    return (
        <div className={styles.header_container}>
            <span>A R C H D E S I G N</span>
            <div className={styles.menu}>
                <a href="#">Quem somos</a>
                <a href="#">Projetos</a>
                <a href="#">Depoimentos</a>
                <a href="#">Contato</a>
                <button className={styles.button}>PROPOSTA</button>
            </div>
        </div>
    )
}