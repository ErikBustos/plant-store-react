import * as cartService from "services/cart";

const CartItem = (props) => {
    const {item, fetchCart} = props;

    return <div className="flex">
        <img className="rounded-md w-28" src={item.image_src}/>
        <div className="flex justify-between mx-4 flex-1">
            <div className="">
                <div className="text-xl font-playfair text-emerald-700">
                    {item.plant_name}
                </div>
                <div className="flex my-1  text-slate-500 ">
                    <div className="text-slate-400 w-14">color: </div>
                    {item.pot_color}
                </div>
                <div className="flex my-1  text-slate-500 ">
                    <div className="text-slate-400 w-14">qty: </div>
                    {item.quantity}
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
                <div className="text-slate-500">
                    ${item.quantity * item.price_per_unit}
                </div>
                <button className="text-sm text-slate-400 hover:text-red-800"
                    onClick={async () => {
                        await cartService.removeItemFromCart({ itemId: item.id});
                        fetchCart();
                    }}>
                    <i className=" mr-1 text-base fa-regular fa-trash"></i>
                    remove
                </button>
            </div>
        </div>
    </div>
}

export default CartItem;