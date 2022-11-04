import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return <div>{JSON.stringify(event)}</div>;
}
