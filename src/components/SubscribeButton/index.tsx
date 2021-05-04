import styles from './styles.module.scss';
import { FaWhatsapp } from 'react-icons/fa';

export function SubscribeButton() {
    return (
        <button type="submit" className={styles.container}>
            <FaWhatsapp />
            Entrar no grupo
        </button>
    )
}