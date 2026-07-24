import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import { useNavigate } from "react-router-dom";

// import baseUrl from "../config/utils";

const TableCategory = () => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [input, setInput] = useState({ categoryName: "", categoryDesc: "", });
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

  const handleEdit = (id) => {
   navigate(`/category/${id}/edit`)
  }
  const handleDelete = (id) => {
  
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    axios.delete(`${baseUrl}/api/category/${id}`).then(() => {
      fetchData();
    });
  };

  const addCategory = () => {
    navigate('create')
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Table Category</h1>
    <button className="buttonCategory" onClick={addCategory} >Add Category</button>
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
                        handleEdit(item.id_tb_category);
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
