import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../config/utils";

// const API_URL = "http://localhost:3000/api/movie";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseUrl}/api/movie`).then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await axios.put(`${baseUrl}/api/movie${editId}`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
      } else {
        await axios.post(`${baseUrl}/api/movie`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
      }
      setInput({ movieTitle: "", movieYear: "" });
      setEditId(null);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleEdit = (movie) => {
    setInput({
      movieTitle: movie.title_tb_movie,
      movieYear: movie.year_tb_movie,
    });
    setEditId(movie.id_tb_movie);
  };

  const handleDelete = (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    axios.delete(`${baseUrl}/api/movie${id}`).then(() => {
      fetchData();
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>CRUD AXIOS</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movieTitle">Movie Title</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Input Your Movie Title.."
            value={input.movieTitle}
            onChange={handleChange}
            required
          />

          <label htmlFor="movieYear">Movie Year</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Input Movie Year.."
            value={input.movieYear}
            onChange={handleChange}
            required
          />

          <input type="submit" value={editId ? "Update" : "Submit"} />
          {editId && (
            <input
              type="button"
              value="Cancel"
              onClick={() => {
                setInput({ movieTitle: "", movieYear: "" });
                setEditId(null);
              }}
            />
          )}
        </form>
      </div>
      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title_tb_movie}</td>
                  <td>{item.year_tb_movie}</td>
                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(item.id_tb_movie);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bt-edit"
                      onClick={() => {
                        handleEdit(item);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CrudAxios