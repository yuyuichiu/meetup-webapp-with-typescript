import { Fragment, useContext } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import MeetupContext from '../../store/meetup-context';

import MeetupDetail from '../../components/meetup/MeetupDetail';

const MeetupDetailPage: NextPage = (props) => {
  const MeetupCtx = useContext(MeetupContext);
  const router = useRouter();

  const targetMeetup = MeetupCtx.meetups.find((x: any) => x.id === router.query.meetupId);

  return <Fragment>
    <h1 style={{textAlign: 'center', textDecoration: 'underline'}}>Meetup Details</h1>
    <MeetupDetail meetup={targetMeetup}/>
  </Fragment>
}

export default MeetupDetailPage