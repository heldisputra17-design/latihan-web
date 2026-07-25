import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../config/utils";

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
        await axios.put(`${baseUrl}/api/movie/${editId}`, {
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
    axios.delete(`${baseUrl}/api/movie/${id}`).then(() => {
      fetchData();
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar Movie</h1>
      </div>

      <div className="card bg-base-100 shadow-xl w-full max-w-md mb-6">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="movieTitle">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                id="movieTitle"
                name="movieTitle"
                placeholder="Input Your Movie Title.."
                className="input input-bordered w-full"
                value={input.movieTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="movieYear">
                <span className="label-text">Movie Year</span>
              </label>
              <input
                type="number"
                id="movieYear"
                name="movieYear"
                placeholder="Input Movie Year.."
                className="input input-bordered w-full"
                value={input.movieYear}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-2 mt-4">
              <input type="submit" value={editId ? "Update" : "Submit"} className="btn btn-success" />
              {editId && (
                <input
                  type="button"
                  value="Cancel"
                  className="btn btn-ghost"
                  onClick={() => {
                    setInput({ movieTitle: "", movieYear: "" });
                    setEditId(null);
                  }}
                />
              )}
            </div>
          </form>
        </div>
      </div>

      <table className="table w-full bg-base-200 rounded-box">
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
              <tr key={index} className="hover">
                <td>{index + 1}</td>
                <td className="font-bold">{item.title_tb_movie}</td>
                <td>{item.year_tb_movie}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => {
                      if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                        handleDelete(item.id_tb_movie);
                      }
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info btn-sm"
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
  );
};
export default CrudAxios