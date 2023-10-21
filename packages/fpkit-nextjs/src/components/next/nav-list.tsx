"use client";

import React from "react";
import Nav from "@/components/nav/nav";
import NavList from "@/components/nav/nav-list";

export type NavListProps = {
  children?: React.ReactNode;
};

const defaultStyles = {};

const NavLists = ({ children, ...props }: NavListProps) => {
  return (
    <div {...props}>
      <Nav></Nav>
      {children}
    </div>
  );
};

export default NavLists;
NavLists.displayName = "NavLists";
NavLists.styles = defaultStyles;
