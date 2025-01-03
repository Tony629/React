import { Button, Stack } from "react-bootstrap"
import storeItems from '../data/items.json'
import { useShoppingCart } from "../context/ShoppingCartContext"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
            <img
                src={item?.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item?.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
            </div>
            <div>{item?.price * quantity}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}