import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getPostsByUserId } from "../store/postsSlice/postsSlice";

const Posts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsByUserId());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h4>Something went wrong</h4>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <table
        style={{
          border: "1px solid black",
        }}>
        <thead
          style={{
            borderBottom: "1px solid black",
          }}>
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
              userId
            </td>
            <td
              style={{
                borderRight: "1px solid black",
              }}>
              title
            </td>
            <td>content</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data
              .filter((post) => post.userId === +id)
              .map((post) => {
                const { id, userId, title, body } = post;

                return (
                  <tr key={id}>
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
                      {userId}
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid black",
                        borderBottom: "1px solid black",
                      }}>
                      {title}
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid black",
                        borderBottom: "1px solid black",
                      }}>
                      {body}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
