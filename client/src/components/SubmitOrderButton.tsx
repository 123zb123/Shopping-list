import { useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearCart } from "../features/cart/cartSlice";
import { submitOrder } from "../api/shoppingApi";

export default function SubmitOrderButton() {
  const items = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      await submitOrder(items);
      setOpen(true);
      setError(null);
      dispatch(clearCart());
    } catch (err) {
      setError(
        `שגיאה בשליחת ההזמנה: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={items.length === 0}
        style={{ marginTop: 20 }}
      >
        סיים הזמנה
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" onClose={() => setOpen(false)}>
          ההזמנה נשלחה בהצלחה!
        </Alert>
      </Snackbar>

      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={3000}
          onClose={() => setError(null)}
        >
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
