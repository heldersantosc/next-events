import React from "react";
import EventItem from "./event-item";

import classes from "./event-list.module.css";

interface IEventListProps {
  items: any[];
}

export default function EventList(props: IEventListProps) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            location={event.location}
          />
        );
      })}
    </ul>
  );
}
