import React from "react";
import { getFeaturedEvents } from "../../dummy-data";

export default function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>All events</h1>
    </div>
  );
}
