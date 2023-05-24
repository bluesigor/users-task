import React, { useState } from "react";
import { Link } from "react-router-dom";

import AlbumModal from "./AlbumModal";
import useModal from "../core/hooks/useModal";

const User = ({ id, name, email }) => {
  const [pic, setPic] = useState("");
  const { setOpen, open } = useModal();

  const handleLogin = () => {
    FB.login(
      (response) => {
        console.log(response);
      },
      { scope: "email" }
    );

    FB.api(
      "/me",
      { fields: "first_name, last_name, name, email,picture" },

      function (response) {
        console.log(response);
        var first = response.first_name;
        var last = response.last_name;
        var ID = response.id;
        var name = response.name;
        var email = response.email;
        var img = response.picture;

        setPic(img.data.url);
        console.log(
          "Name: " +
            name +
            " first: " +
            first +
            " Last: " +
            last +
            " ID: " +
            ID +
            " email: " +
            email +
            " IMG: " +
            img
        );
      }
    );
    FB.api("/me/picture", "GET", { fields: "picture" }, function (response) {
      console.log(response);
    });
  };

  console.log(pic);

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
        <img src={pic} alt={pic} />
        <button onClick={() => setOpen(true)}>Albums</button>
        <button onClick={handleLogin}>Login</button>
        {open && <AlbumModal setOpen={setOpen} userId={id} />}
      </td>
    </tr>
  );
};

export default User;
