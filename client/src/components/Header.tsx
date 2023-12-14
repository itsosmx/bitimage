import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm h-12 flex justify-around items-center">
      <h1 className="font-bold text-xl text-text">
        <Link to="/">BitImage</Link>
      </h1>
      <Link className="bg-primary p-2 px-4 rounded-md text-sm text-text" to="/post">Create</Link>
    </header>
  );
}
