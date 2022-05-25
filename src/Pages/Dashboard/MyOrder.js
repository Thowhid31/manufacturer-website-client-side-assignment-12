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
            <h2 className='font-bold text-black my-5 text-xl'>My Total Orders: <span className='text-red-600'>{orders.length}</span></h2>

            <div>
                <div class="overflow-x-auto ">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders.map((order, index)=> <tr>
                                <th className="bg-blue-200 text-black">{index + 1}</th>
                                <td>{order.email}</td>
                                <td className="bg-blue-200 text-black">{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td className="bg-blue-200 text-black">{order.price}</td>
                            </tr>)
                        }

                        


                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );

};

export default MyOrders;
