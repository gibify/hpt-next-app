import router, { useRouter } from 'next/router';
import { FaSignInAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export function SignInButton({ onClick }) {
    return (
        <button 
            className={styles.container}
            onClick={onClick}
        >
            <FaSignInAlt />
            Entrar com o Facebook
        </button>
    )
}
