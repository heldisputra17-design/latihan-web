import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import { useParams, useNavigate } from "react-router-dom";

const FormCategory = () => {
  let {id} = useParams()
  let navigate = useNavigate()

  const [data, setData] = useState([]);
  const [input, setInput] = useState({ categoryName: "", categoryDesc: ""});
  const [editId, setEditId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseUrl}/api/category/${id}`).then((res) => {
      let {
        desc_tb_category: categoryDesc,
        id_tb_category: categoryId,
        name_tb_category: categoryName
      } = res.data[0];
      setInput({categoryDesc, categoryId, categoryName});
      setEditId(categoryId);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.categoryId) {
        await axios.put(`${baseUrl}/api/category/${editId}`, {
          name: input.categoryName,
          desc: input.categoryDesc,
        });
        navigate('/tablecategory');
      } else {
        await axios.post(`${baseUrl}/api/category`, {
          name: input.categoryName,
          desc: input.categoryDesc,
        });
      }
      setInput({ categoryName: "", categoryDesc: "" });
      setEditId(null);
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

  const resetForm = () => {
    setInput({ categoryName: "", categoryDesc: "" });
    setEditId(null);
    navigate('/tablecategory');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mt-4">{id ? "Edit Category" : "Add Category"}</h1>
      <div className="card bg-base-100 shadow-xl mt-4 w-full max-w-md">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="categoryName">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                placeholder="Input Category Name.."
                className="input input-bordered w-full"
                value={input.categoryName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control w-full mb-4">
              <label className="label" htmlFor="categoryDesc">
                <span className="label-text">Category Description</span>
              </label>
              <textarea
                id="categoryDesc"
                name="categoryDesc"
                placeholder="Input Category Description.."
                className="textarea textarea-bordered w-full"
                value={input.categoryDesc}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-2 mt-4">
              <input type="submit" value={editId ? "Update" : "Submit"} className="btn btn-success" />
              {editId && <input type="button" value="Cancel" className="btn btn-ghost" onClick={resetForm} />}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormCategory;