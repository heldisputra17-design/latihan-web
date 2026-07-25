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
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-base-200 rounded-box border border-base-300">
            <thead>
              <tr className="text-left">
                <th className="w-12">No</th>
                <th>Name</th>
                <th>Description</th>
                <th className="w-44 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index} className="hover">
                    <td className="text-center">{index + 1}</td>
                    <td className="font-bold">{item.name_tb_category}</td>
                    <td className="opacity-70">{item.desc_tb_category}</td>
                    <td>
                      <div className="flex gap-2 justify-center">
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

export default TableCategory;
