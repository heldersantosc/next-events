import React from "react";
import EventItem from "./EventItem";

interface EventListProps {
  items: any[];
}

export default function EventList(props: EventListProps) {
  const { items } = props;

  return (
    <ul>
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
