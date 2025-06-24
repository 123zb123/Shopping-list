import { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addItem } from "../features/cart/cartSlice";
import type { Category } from "../features/categories/categoriesSlice";

export const ProductForm = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleAdd = () => {
    if (!name.trim() || !selectedCategory) {
      alert("נא למלא שם מוצר ולבחור קטגוריה");
      return;
    }

    dispatch(addItem({ name, categoryId: selectedCategory.id, quantity: 1 }));
    setName("");
    setSelectedCategory(null);
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mt={3}>
      <TextField
        label="שם מוצר"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        select
        label="קטגוריה"
        value={selectedCategory?.id || ""}
        onChange={(e) => {
          const category = categories.find((c) => c.id === e.target.value);
          if (category) setSelectedCategory(category);
        }}
        style={{ minWidth: 180 }}
      >
        <MenuItem disabled value="">
          בחר קטגוריה
        </MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" color="primary" onClick={handleAdd}>
        הוסף
      </Button>
    </Box>
  );
};
