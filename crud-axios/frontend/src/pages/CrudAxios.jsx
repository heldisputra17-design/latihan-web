import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/movie";

const CrudAxios = () => {
  const [movies, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !year) return;

    const payload = { title, year: Number(year) };

    if (editId) {
      axios.put(`${API_URL}/${editId}`, payload).then(() => {
        resetForm();
        fetchFilms();
      });
    } else {
      axios.post(API_URL, payload).then(() => {
        resetForm();
        fetchFilms();
      });
    }
  };

//   const handleEdit = (film) => {
//     setTitle(film.title_tb_movie);
//     setYear(film.year_tb_movie);
//     setEditId(film.id_tb_movie);
//   };

//   const handleDelete = (id) => {
//     if (!confirm("Yakin ingin menghapus data ini?")) return;
//     axios.delete(`${API_URL}/${id}`).then(() => {
//       fetchFilms();
//     });
//   };

  const resetForm = () => {
    setTitle("");
    setYear("");
    setEditId(null);
  };

  return (
    <>
      <h1>CRUD AXIOS</h1>
      <div className="div-input">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movietitle">Input Movie</label>
          <input
            type="text"
            id="movietitle"
            placeholder="Your Movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="movieyear">Input Tahun</label>
          <input
            type="number"
            id="movieyear"
            placeholder="Your Movie year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />

          <div className="form-buttons">
            <input
              type="submit"
              value={editId ? "Update" : "Submit"}
              className={editId ? "btn-update" : "btn-submit"}
            />
            {editId && (
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="table-movie">
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
            {movies.length > 0 ? (
              movies.map((item) => (
                <tr key={item.id_tb_movie}>
                  <td>{item.id_tb_movie}</td>
                  <td>{item.title_tb_movie}</td>
                  <td>{item.year_tb_movie}</td>
                  <td>
                    {/* <button
                      className="btn-edit"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(item.id_tb_movie)}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Tidak ada data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CrudAxios;