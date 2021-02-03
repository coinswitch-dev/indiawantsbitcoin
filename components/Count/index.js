import React from 'react';
import styles from './styles.module.scss';
import fire from '../../config/firebase.js';
import firebase from 'firebase';

export default class Select extends React.Component {
    state = {
        selectedOption: null,
        count: 0,
    };
     componentDidMount() {
      this.getRealTimeCount();
    }

    getRealTimeCount = () => {
      const query = fire.firestore().collection('shards');
      const observer = query.onSnapshot(querySnapshot => {
        let dataList = [];
        let count = 0;
        querySnapshot.forEach((item, i) => {
          let temp = item.data();
          if(typeof(temp?.count) === 'number' && temp?.count > 0) {
            count += temp?.count;
          }
        });
        console.log('#####count####', count);
        if(typeof(count) === 'number' && count > 0) {
          this.setState({count});
        }
      }, err => {
        console.log(`Encountered error: ${err}`);
      });
    }

    getCount = async () => {
      const querySnapshot = await fire.firestore().collection('shards').get();
      const documents = querySnapshot.docs;

      let count = 0;
      for (const doc of documents) {
        count += doc.get('count');
      }
      this.setState({
        count: count || 0,
      })
    }

    increaseCount = () => {
      const numShards = 10;
      const shardId = Math.floor(Math.random() * numShards);
      const shardRef = fire.firestore().collection('shards').doc(shardId.toString());
      shardRef.set({count: firebase.firestore.FieldValue.increment(1)}, {merge: true});
    }

    render() {
        return (
            <div>
              Count {parseInt(this.state.count) > 0 ? this.state.count : ''}
              <button onClick={this.increaseCount} className={styles.cta}>
                Send Mail
              </button>
            </div>
        );
    }
}
