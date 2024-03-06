import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQ, increaseItemQ } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={(e) => dispatch(decreaseItemQ(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={(e) => dispatch(increaseItemQ(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
