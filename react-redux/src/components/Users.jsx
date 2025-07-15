import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser } from '../slices/userSlices'
import { Bounce, ToastContainer, toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'


function Users() {
const users = useSelector((state)=>state.userInfo.users)// here the state represents the reducer in the store. users is from the slice -> initialState's object -> user.
const dispatch = useDispatch()
const navigate=useNavigate()

    function handleDelete(index){
        toast.warning("User Deleted !")
        dispatch(deleteUser(index))
        setTimeout(() => {
            navigate('/adduser')
        }, 3000);
    }

  return (
    <div className="p-6">
        <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
              />
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">All Users</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user , index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{user.name}</h3>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {user.email}</p>
            <p className="text-gray-700"><span className="font-medium">Age:</span> {user.age}</p>
            <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
            <p className="text-gray-700"><span className="font-medium">Address:</span> {user.address}</p>
             <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition cursor-pointer mt-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users