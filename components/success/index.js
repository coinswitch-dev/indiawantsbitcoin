import styles from './styles.module.scss';
import successImage from '../../public/email-success.png';

export default function Success() {
    return(
        <div className={`${styles.parent} container mx-auto shadow-md`}>
            <img src={successImage} alt="email success" className={styles.successImage} />
            <div className={styles.successText}>
                Thank you for your efforts to play your part. We appreciate your support for standing up for Crypto and sending this message to your MPs. Let’s hope for the best. Thanks!!
            </div>
        </div>
    )
}