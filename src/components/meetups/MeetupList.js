import React from "react";
import MeetupItem from "./MeetupItem";
import "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className="list">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.description}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
