import { useState } from 'react';
import { db } from './Firebase-config'; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; 

function AddEmployee() {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeDesignation, setEmployeeDesignation] = useState('');

  const handleAddEmployee = async () => {
    try {
      const docRef = await addDoc(collection(db, "employees"), {
        name: employeeName,
        designation: employeeDesignation
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Employee added successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addall=async()=>{
    try{

    }catch{

    }
  }

  return (
    <div>
      <h2>Add Employee</h2>
      <div className=''>
      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        className='m-1 p-2 rounded-lg'
      />
      <input
        type="text"
        placeholder="Employee Designation"
        value={employeeDesignation}
        onChange={(e) => setEmployeeDesignation(e.target.value)}
        className='m-1 p-2 rounded-lg'
      />
      <button onClick={handleAddEmployee} className='bg-blue-600 border-black border-2 p-2  rounded-md'>Add Employee</button>
    </div>
    </div>
  );
}

export default AddEmployee;
