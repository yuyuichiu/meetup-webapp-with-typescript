export interface Meetup {
  id: string;
  title: string;
  image: string; 
  address: string;
  description: string;
}

export interface MeetupState {
  meetups: Meetup[];
  totalMeetups: number;
}

export interface MeetupAction {
  type: 'ADD' | 'DELETE' | 'CLEAR',
  item: Meetup
}