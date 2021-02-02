import React from 'react';
import ReactSelect from 'react-select';
import Link from 'next/link'
import styles from './styles.module.scss';

export default class Select extends React.Component {

    render() {
        return (
            <div>
            hello
            <Link href="/" className={styles.privacyLabel}>
              home
            </Link>
            </div>
        );
    }
}
