import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

interface IButtonsProps {
  link: string;
  children: any;
}

export default function Button(props: IButtonsProps) {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}
