import * as React from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/router';
import { Meetup } from '../interfaces'

import styles from './MeetupDetail.module.css';

interface MeetupDetailProps {
  meetup: Meetup
}

const MeetupDetail: React.FC<MeetupDetailProps> = (props) => {
  const router = useRouter();

  return <ul className={styles.meetupDetail}>
    <li>
      {props.meetup && <React.Fragment>
        <img src={props.meetup.image} alt='meetup picture'></img>
        <h1>{props.meetup.title}</h1>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>
        <Button onClick={() => router.push({ pathname: '/' })}>Back to Meetups</Button>
      </React.Fragment>}
      
      {!props.meetup && <React.Fragment>
        <h1>The Meeting you are looking for does not exist.</h1>
        <Button onClick={() => router.push({ pathname: '/' })}>Back to Meetups</Button>
      </React.Fragment>}
    </li>
  </ul>
}

export default MeetupDetail