import Image from "next/image";
import React from "react";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";

import classes from "./event-item.module.css";

interface IEventItemProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
}

export default function EventItem(props: IEventItemProps) {
  const { id, title, image, date, location } = props;
  const exploreLink = `/events/${id}`;
  const formattedAddress = location.replace(", ", "\n");
  const humanReadableDate = new Date(date).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li key={`item-${id}`} className={classes.item}>
      <Image src={"/" + image} alt="" height={320} width={320} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
