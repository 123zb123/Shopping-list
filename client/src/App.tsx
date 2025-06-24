import { useEffect } from "react";
import { Container } from "@mui/material";
import { useAppDispatch } from "./hooks";
import { fetchCategories } from "./features/categories/categoriesSlice";
import { Cart } from "./features/cart/Cart";
import SubmitOrderButton from "./components/SubmitOrderButton";
import { ProductForm } from "./components/ProductForm";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div dir="rtl" style={{ textAlign: "right", padding: 20 }}>
      <Container>
        <h1>רשימת קניות</h1>
        <ProductForm />
        <Cart />
        <SubmitOrderButton />
      </Container>
    </div>
  );
};

export default App;
