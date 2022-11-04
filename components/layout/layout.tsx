import React, { Fragment } from "react";
import MainHeader from "./main-header";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
