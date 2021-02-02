import React from 'react';
import ReactSelect from 'react-select';
import styles from './styles.module.scss';
import fire from '../../config/firebase.js';
import firebase from 'firebase';

export default class Select extends React.Component {
    state = {
        selectedOption: null,
        count: 0,
    };
     componentDidMount() {
      this.increaseCount();
      this.getCount();
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
              Count {this.state.count}
            </div>
        );
    }
}
