import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Homes from '../pages/Homes';
import CrudAxios from '../pages/CrudAxios';
import TableCategory from "../pages/Category/TableCategory";
import FormCategory from "../pages/Category/FormCategory";

const MainRouter = () => {
     return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<MainLayout />}>
         <Route index element={<Homes />} />
         <Route path="crudAxios" element={<CrudAxios />} />
         <Route path="category" element={<TableCategory />} />
         <Route path="category/create" element={<FormCategory />} />

       </Route>
     </Routes>
   </BrowserRouter>

      );
};

export default MainRouter;
