import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const qunatity = useSelector(getTotalQuantity);

  const price = useSelector(getTotalPrice);

  if (!qunatity) return null;

  return (
    <div className="flex items-center justify-between px-4 py-4 text-sm uppercase bg-stone-800 text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-3 text-semibold text-stone-300 sm:space-x-6">
        <span>{qunatity} pizzas</span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
