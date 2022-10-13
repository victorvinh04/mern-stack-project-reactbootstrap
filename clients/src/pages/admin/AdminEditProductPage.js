import { useSelector } from "react-redux";
import EditProductPage from "./components/EditProductPage";
import axios from "axios";

const fetchProduct = async (productId) => {
  const { data } = await axios.get(`/api/products/get-one/${productId}`);
  return data;
};

const updateProductApiRequest = async (productId, formInputs) => {
  const { data } = await axios.put(`/api/products/admin/${productId}`, {
    ...formInputs,
  });
  return data;
};

const AdminEditProductPage = () => {
  const { categories } = useSelector((state) => state.getCategories);

  return (
    <EditProductPage
      categories={categories}
      fetchProduct={fetchProduct}
      updateProductApiRequest={updateProductApiRequest}
    />
  );
};

export default AdminEditProductPage;
