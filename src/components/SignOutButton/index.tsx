import { FaSignOutAlt } from 'react-icons/fa';

import styles from './styles.module.scss';

export function SignOutButton({ onClick }) {

    return (
        <button 
        type="submit" 
        className={styles.container}
        onClick={onClick}
        >
            <FaSignOutAlt/>
            Encerrar Sessão
        </button>
    )
}