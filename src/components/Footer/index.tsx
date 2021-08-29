import styles from './styles.module.scss';
import { AiFillCopyrightCircle } from 'react-icons/ai';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p><AiFillCopyrightCircle />todos os direitos reservado<span>hebraico para todos</span></p>
        </footer>
    )
}