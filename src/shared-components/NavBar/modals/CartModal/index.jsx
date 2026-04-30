import SessionContext from 'context/SessionContext';
import { useCallback, useContext, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { RemoveScroll } from 'react-remove-scroll';
import * as cartService from 'services/cart'
import LoadingSpinner from 'shared-components/LoadingSpinner';
import CartItem from './CartItem';
import { clsx } from 'clsx';

const CartModal = (props) => {
    const { setCartOpen } = props;
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { username } = useContext(SessionContext);

    const fetchCart = useCallback(async () => {
        setLoading(true);
        const response = await cartService.getCart();
        setItems(await response.json());
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    let totalQuantity = 0;
    let subtotal = 0;
    for (let item of items) {
        totalQuantity += item.quantity;
        subtotal += item.quantity * item.price_per_unit;
    }

    return (
        <motion.div className="bg-white h-screen w-full max-w-xl flex flex-col"
            initial={{translateX: "100%"}}
            animate={{translateX: 0}} 
            transition={{duration: 0.5}}>
            <div className='bg-emerald-800 text-white font-playfair text-center py-7 text-3xl shadow-md'>
                {username}&apos;s Cart
            </div>
            {
                loading ? <LoadingSpinner /> :
                    <>
                        <div className='flex-1 overflow-y-scroll pb-20'>
                            {
                                items.map((item, idx) => (
                                    <div key={item.id}
                                        className={clsx('mx-5 mt-8 pt-8', idx !== 0 && "border-t border-slate-200")}
                                    >
                                        <CartItem item={item} fetchCart={fetchCart} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex flex-col px-4 border-t border-slate-200 pb-4'>
                            <div className='flex justify-between py-4 text-slate-400'>
                                <div>{totalQuantity} items</div>
                                <div>
                                    subtotal
                                    <span className='ml-2 text-lg text-slate-500'>
                                        ${subtotal}
                                    </span>
                                </div>
                            </div>
                            <div className='bg-emerald-700 rounded-full flex items-center justify-center py-3 text-lg text-white'
                                onClick={() => alert("this app is not a real plant selling site :)")}>
                                checkout <i className='text-2xl ml-2 fa-regular fa-arrow-right-to-line'></i>
                            </div>
                        </div>
                    </>
            }
        </motion.div>
    )
};

export default CartModal;