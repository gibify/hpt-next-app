import styles from './styles.module.scss';
import { AiFillCopyrightCircle } from 'react-icons/ai';

export function Footer() {
    return (
        <footer className={styles.container}>
            <p><AiFillCopyrightCircle />todos os direitos reservado<a href="">www.hebraicoparatodos.com.br</a></p>
        </footer>
    )
}