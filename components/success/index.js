import styles from './styles.module.scss';
import successImage from '../../public/email-success.png';

export default function Success() {
    return(
        <div className={`${styles.parent} container mx-auto shadow-md`}>
            <img src={successImage} alt="email success" className={styles.successImage} />
            <div className={styles.successText}>
                Thank you for your support and participation. Please help us spread the word!
            </div>
        </div>
    )
}