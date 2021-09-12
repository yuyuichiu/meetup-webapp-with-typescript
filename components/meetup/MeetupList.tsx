import React, { Fragment } from 'react';
import MeetupItem from './MeetupItem';
import { Meetup } from '../interfaces';

import styles from './MeetupList.module.css'

interface MeetupListProps {
  meetups: Meetup[]
}

const MeetupList: React.FC<MeetupListProps> = (props) => {
  return (<Fragment>
    <ul className={styles.meetups}>
      {props.meetups.slice(0).reverse().map((m, idx) => { return <MeetupItem key={idx} meetupInfo={m} /> })}
    </ul>
  </Fragment>)
}

export default MeetupList