import { NextPage } from "next";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetup/NewMeetupForm";


const addMeetup: NextPage = () => {
  return <Fragment>
    <NewMeetupForm />
  </Fragment>
}

export default addMeetup