import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2 className='font-bold text-purple-500 my-5 text-2xl'>My Orders: <span className='text-red-600'>{orders.length}</span></h2>
        </div>
    );

};

export default MyOrders;
