import styles from './styles.module.scss';
import { FcAbout } from 'react-icons/fc';

export function Header() {
    return (
        <header className={styles.container}>
            <p><FcAbout /> nosso grupo, saiba mais...</p>
        </header>
    )
}