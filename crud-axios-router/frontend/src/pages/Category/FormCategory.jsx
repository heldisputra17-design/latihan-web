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
    <h1>{id}</h1>
      <h1>Edit Category</h1>
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
    <textarea
      id="categoryDesc"
      name="categoryDesc"
      placeholder="Input Category Description.."
      value={input.categoryDesc}
      onChange={handleChange}
      required
    />
     <input type="submit" value={editId ? "Update" : "Submit"} />
     {editId && <input type="button" value="Cancel" onClick={resetForm} />}
        </form>
      </div>
    </>
  );
};

export default FormCategory;