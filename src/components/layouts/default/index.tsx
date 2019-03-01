import Link from "next/link";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <header>
        <Link href="/">
          <a>Top</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </header>
      {props.children}
      <footer>
        <Link href="/">
          <a>Top</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </footer>
    </div>
  );
};

export default DefaultLayout;
