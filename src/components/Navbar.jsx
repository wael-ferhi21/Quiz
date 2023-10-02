import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useUser from "../hooks/useUser";

export default function Navbar() {
  const { checkUser, user } = useUser();
  let username = null;
  if (checkUser()) {
    username = user.email;
  }
  return (
    <div className='navbar'>
      <a href='/'>
        <h1>Quiz Time</h1>
      </a>
      <div className='search__section'>
        <SearchIcon />
        <input
          type='search'
          placeholder='Search...'
          className='navbar__search'
        />
      </div>

      <button className='navbar__button'>start quiz</button>
      <div>{username ? <h1>{username}</h1> : ""}</div>
    </div>
  );
}
