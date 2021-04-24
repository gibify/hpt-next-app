import styles from './styles.module.scss';
import { FaFacebook } from 'react-icons/fa';

export function SignInButton() {
    return (
        <button type="submit" className={styles.container}>
            <FaFacebook />
            Entrar pelo Facebook
        </button>
    )
}