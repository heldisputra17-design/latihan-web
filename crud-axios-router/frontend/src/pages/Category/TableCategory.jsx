import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../config/utils";
// import baseUrl from "../config/utils";

const TableCategory = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ categoryName: "", categoryDesc: "" });
  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseUrl}/api/category`).then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await axios.put(`${baseUrl}/api/category/${editId}`, {
          name: input.categoryName,
          desc: input.categoryDesc,
        });
      } else {
        await axios.post(`${baseUrl}/api/category`, {
          name: input.categoryName,
          desc: input.categoryDesc,
        });
      }
      setInput({ categoryName: "", categoryDesc: "" });
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

  const handleEdit = (category) => {
    setInput({
      categoryName: category.name_tb_category,
      categoryDesc: category.desc_tb_category,
    });
    setEditId(category.id_tb_category);
  };

  const handleDelete = (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    axios.delete(`${baseUrl}/api/category/${id}`).then(() => {
      fetchData();
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Table Category</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="Input Category Name.."
            value={input.categoryName}
            onChange={handleChange}
            required
          />

          <label htmlFor="categoryDesc">Category Description</label>
          <input
            type="text"
            id="categoryDesc"
            name="categoryDesc"
            placeholder="Input Category Description.."
            value={input.categoryDesc}
            onChange={handleChange}
            required
          />

          <input type="submit" value={editId ? "Update" : "Submit"} />
          {editId && (
            <input
              type="button"
              value="Cancel"
              onClick={() => {
                setInput({ categoryName: "", categoryDesc: "" });
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
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name_tb_category}</td>
                  <td>{item.desc_tb_category}</td>
                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(item.id_tb_category);
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

export default TableCategory;
