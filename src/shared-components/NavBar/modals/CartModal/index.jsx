import SessionContext from 'context/SessionContext';
import { useContext, useEffect, useState } from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import * as cartService from 'services/cart'
import LoadingSpinner from 'shared-components/LoadingSpinner';
import CartItem from './CartItem';

const CartModal = (props) => {
    const { setCartOpen } = props;
    const [loading, setLoading] = useState(true);
    const [items , setItems] = useState([]);
    const { username } = useContext(SessionContext);

    useEffect(() => {
        (async ()=> {
            setLoading(true);
            const response = await cartService.getCart();
            setItems(await response.json());
            setLoading(false);
        })()
    }, []);

    return (
        <RemoveScroll>
            <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato">
                <div className="bg-white h-screen w-full max-w-xl">
                    <button className='absolute top-0 right-0 p-2' onClick={() => setCartOpen(false)}>
                        <i className='fa-regular fa-circle-xmark text-4xl text-emerald-400'></i>
                    </button>
                    <div className='bg-emerald-800 text-white font-playfair text-center py-7 text-3xl shadow-md'>
                        {username}&apos;s Cart
                    </div>
                    <div>
                        {
                            loading ? <LoadingSpinner /> : 
                            <>
                                <div>
                                    {
                                        items.map((item) => <CartItem item={item} key={item.id}/>)
                                    }
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </RemoveScroll>
    )
};

export default CartModal;