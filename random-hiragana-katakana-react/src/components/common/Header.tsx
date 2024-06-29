import React from "react";
import GithubIconLink from "./GithubIconLink";

type Props = {
  children?: React.ReactNode;
};
const Header = ({ children }: Props) => {
  return (
    <header className="fixed w-full">
      <nav className="flex flex-nowrap items-center justify-between p-2">
        <div>{children}</div>
        <GithubIconLink />
      </nav>
    </header>
  );
};

export default Header;
