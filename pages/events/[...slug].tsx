import React, { Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import { getFilteredEvents } from "../../dummy-data";
import Button from "../../components/ui/button";

interface IEventListProps {}

export default function FilteredEventsPage(props: IEventListProps) {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filterdMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filterdMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <div className="center">
          <p className="center">Invalid filter. Please adjust your values!</p>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <div className="center">
          <p className="center">No events found for the chosen filter!</p>
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <div className="center">
        <ResultsTitle date={date} />
      </div>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
