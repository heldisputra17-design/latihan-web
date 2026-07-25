import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import { useNavigate } from "react-router-dom";

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
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Daftar Category</h1>
          <button className="btn btn-primary" onClick={addCategory}>+ Add Category</button>
        </div>
        <ul className="menu bg-base-200 rounded-box w-full">
          {data.map((item, index) => {
            return (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <span className="font-bold">{index + 1}. {item.name_tb_category}</span>
                  <span className="ml-3 text-sm opacity-70">{item.desc_tb_category}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => {
                      if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                        handleDelete(item.id_tb_category);
                      }
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => {
                      handleEdit(item.id_tb_category);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TableCategory;
