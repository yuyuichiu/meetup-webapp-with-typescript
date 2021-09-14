import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import styles from "./MeetupItem.module.css";
import { Meetup } from "../interfaces";

interface MeetupItemProps {
  meetupInfo: Meetup;
}

const MeetupItem: React.FC<MeetupItemProps> = (props) => {
  const router = useRouter();

  const showDetailPageHandler = () => {
    // Redirect to the corresponding detail page
    router.push({ pathname: `/${props.meetupInfo.id}` });
  };

  return (
    <div className={styles.meetup}>
      <img
        src={props.meetupInfo.image}
        alt="Meetup Picture"
        className={styles.img}
      />
      <h2>{props.meetupInfo.title}</h2>
      <p>{props.meetupInfo.description}</p>
      <Button onClick={showDetailPageHandler}>Show Details</Button>
    </div>
  );
};

// Static Loading -- approach to pre render the page.
const dummy_meetup = [
  {
    id: "meetup01",
    title: "Awesome Meetup",
    image:
      "https://wkassets-production.s3.ap-east-1.amazonaws.com/styles/field_hero_images/s3/wkcda-tower.jpg?h=d23e7ba4&itok=IHyTkUbu",
    address: "Hong Kong",
    description: "An awesome meetup in October",
  },
];


/* 
  To-do: 
  Revise getStaticPath and getStaticProps
  Functionality to delete meetups
*/
export const getStaticPath: GetStaticPaths = async (context) => {
  return {
    paths: [
      { params: { meetupId: 'meetup01' } },
      { params: { meetupId: 'meetup02' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context.params!.meetupId);
  return {
    props: { meetupInfo: dummy_meetup },
    revalidate: 50
  }
}

// An alternative is getServerSideProps, but that cost longer time on loading...
// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res;

//   return {
//     props: { meetupInfo: dummy_meetup }
//   }
// }

export default MeetupItem;
