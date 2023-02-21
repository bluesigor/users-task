import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAlbums } from "../store/albumsSlice/albumsSlice";

const AlbumModal = ({ setOpen, userId }) => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          paddingTop: "100px",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}></div>
      <div
        style={{
          minWidth: "500px",
          height: "300px",
          position: "absolute",
          top: "20%",
          left: "30%",
          zIndex: "1",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "lightblue",
            padding: "20px",
          }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <h5>AlbumModal</h5>
            <button
              onClick={() => {
                setOpen(false);
                console.log(1);
              }}>
              X
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <td>id</td>
                <td>userId</td>
                <td>title</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data
                  .filter((album) => album.userId === userId)
                  .map((album) => {
                    const { id, title, userId } = album;

                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{userId}</td>
                        <td
                          style={{
                            textAlign: "start",
                          }}>
                          {title}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AlbumModal;
