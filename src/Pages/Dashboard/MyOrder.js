import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import DeleteConfirmModal from "./DeleteConfirmModal";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const [cancelingOrder, setCancelingOrder] = useState(null);

    const {email} = useParams();

    const handleCancelOrder = email =>{
        fetch(`http://localhost:5000/orders/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success('Your Order Canceled!')
            }
        })
    }

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
                                <th>Pay Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr>
                                    <th className="bg-blue-200 text-black">{index + 1}</th>
                                    <td>{order.email}</td>
                                    <td className="bg-blue-200 text-black">{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td className="bg-blue-200 text-black">
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            
                                            <p><span className="text-green-600">Paid</span></p>
                                            <p>TransactionId: <span>{order.transactionId}</span></p>
                                            </div>}
                                    </td>
                                    <td>
                                       
                                       
                                        {!order.paid && <button onClick={()=> handleCancelOrder(email)} className="btn btn-xs btn-error">Cancel</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {cancelingOrder && <DeleteConfirmModal
                cancelingOrder={cancelingOrder}
                setCancelingOrder={setCancelingOrder}
            ></DeleteConfirmModal>}
        </div>
    );

};

export default MyOrders;
