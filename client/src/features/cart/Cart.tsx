import { useAppSelector } from "../../hooks";

export const Cart = () =>  {
  const items = useAppSelector(state => state.cart);
  const categories = useAppSelector(state => state.categories);

  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || 'לא ידוע';
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>סה"כ מוצרים בסל: {total}</h2>
      {items.map((item, index) => (
        <div key={index}>
          {item.name} (קטגוריה: {getCategoryName(item.categoryId)}) - כמות: {item.quantity}
        </div>
      ))}
    </div>
  );
};
