import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IEventItemProps {
  id: string;
  key: number;
  title: string;
  image: string;
  date: string;
  location: string;
}

export default function EventItem(props: IEventItemProps) {
  const { key, title, image, date, location } = props;
  const exploreLink = `/events/${key}`;
  const formattedAddress = location.replace(", ", "\n");
  const humanReadableDate = new Date(date).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li key={`item-${key}`}>
      <Image src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
