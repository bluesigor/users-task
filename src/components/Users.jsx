import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/usersSlice/usersSlice";
import User from "./User";

const Users = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <table
      style={{
        border: "1px solid black",
      }}>
      <thead>
        <tr>
          <td
            style={{
              borderRight: "1px solid black",
            }}>
            id
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}>
            Name
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}>
            email
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}>
            Posts
          </td>
          <td
            style={{
              borderRight: "1px solid black",
            }}>
            Albums
          </td>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((user) => {
            return (
              <User
                name={user.name}
                id={user.id}
                email={user.email}
                key={user.id}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default Users;
