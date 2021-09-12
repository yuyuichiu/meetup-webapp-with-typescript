import React from "react";
import MeetupContext from "./meetup-context";
import { Meetup, MeetupAction, MeetupState } from '../components/interfaces'

const defaultMeetups = {
  meetups: [
    {
      id: 'meetup01',
      title: "Awesome Meetup",
      image:
        "https://wkassets-production.s3.ap-east-1.amazonaws.com/styles/field_hero_images/s3/wkcda-tower.jpg?h=d23e7ba4&itok=IHyTkUbu",
      address: "Hong Kong",
      description: "An awesome meetup in October",
    },
    {
      id: 'meetup02',
      title: "Another Cool Meetup",
      image:
        "https://wpguynews.com/wp-content/uploads/2021/01/how-to-host-a-meetup-featured-image.jpg",
      address: "Hong Kong",
      description: "Cool, let us meet at November 1",
    },
  ],
  totalMeetups: 2
};

const MeetupReducer = (prevState: MeetupState, action: MeetupAction) => {
  if(action.type === 'ADD') {
    return {
      meetups: prevState.meetups.concat(action.item),
      totalMeetups: prevState.totalMeetups + 1
    }
  }

  if(action.type === 'DELETE') {
    if(prevState.meetups.findIndex(x => x.id === action.item.id))
    return {
      meetups: prevState.meetups.filter(x => x.id !== action.item.id),
      totalMeetups: prevState.totalMeetups - 1
    }
  }

  return defaultMeetups
};

const MeetupProvider: React.FC = (props) => {
  // Set up the global state with useReducer inside the Provider
  const [meetupState, dispatchMeetupAction] = React.useReducer(MeetupReducer, defaultMeetups);

  // Configure the handlers to dispatch an update action
  const addMeetupHandler = (item: Meetup) => {
    dispatchMeetupAction({ type: 'ADD', item: item })
  }

  const deleteMeetupHandler = (item: Meetup) => {
    dispatchMeetupAction({ type: 'DELETE', item: item })
  }

  // Connect the state into our context
  const meetupCtx = {
    meetups: meetupState.meetups,
    totalMeetups: meetupState.meetups.length,
    addMeetup: addMeetupHandler,
    deleteMeetup: deleteMeetupHandler,
  }

  // which we output the context through our Provider wrapper
  return (
    <MeetupContext.Provider value={meetupCtx}>
      {props.children}
    </MeetupContext.Provider>
  );
};

export default MeetupProvider;
