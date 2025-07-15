import { useDispatch, useSelector } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { deleteStudent } from "../slices/studentSlices";
import { useNavigate } from "react-router-dom";

function Students() {
    const students=useSelector((state)=>state.studentInfo.students);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    function handleDelete(index) {
        toast.warning("Student Deleted !")
        dispatch(deleteStudent(index))
        setTimeout(()=>{
            navigate("/addstudent")
        },3000)
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
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">All Students</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student , index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{student.name}</h3>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {student.email}</p>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {student.rollnumber}</p>
            <p className="text-gray-700"><span className="font-medium">Age:</span> {student.department}</p>
            <p className="text-gray-700"><span className="font-medium">Phone:</span> {student.degree}</p>
            <p className="text-gray-700"><span className="font-medium">Address:</span> {student.college}</p>
            <p className="text-gray-700"><span className="font-medium">Address:</span> {student.address}</p>
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

export default Students