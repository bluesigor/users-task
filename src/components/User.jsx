import React from "react";
import { Link } from "react-router-dom";

import AlbumModal from "./AlbumModal";
import useModal from "../core/hooks/useModal";

const User = ({ id, name, email }) => {
  const { setOpen, open } = useModal();

  return (
    <tr>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}>
        {id}
      </td>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}>
        {name}
      </td>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}>
        {email}
      </td>
      <td
        style={{
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "700",
            border: "1px solid lightgray",
          }}
          to={`posts/${id}`}>
          Posts
        </Link>
      </td>
      <td
        style={{
          borderRight: "1px solid black",
        }}>
        <button onClick={() => setOpen(true)}>Albums</button>
        {open && <AlbumModal setOpen={setOpen} userId={id} />}
      </td>
    </tr>
  );
};

export default User;
