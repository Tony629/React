import { useState, createContext, useContext } from "react"
import { ShoppingCart } from '../components/ShoppingCart'

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number,
    cartItems: CartItem[],
    openCart: () => void
    closeCart: () => void
}

type ShoppingCartContextProps = {
    children: React.ReactNode
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

// eslint-disable-next-line react-refresh/only-export-components
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity
    }, 0)

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, cartQuantity, cartItems, removeFromCart, openCart, closeCart }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}