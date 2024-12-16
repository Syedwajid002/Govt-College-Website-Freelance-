import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './Firebase-config';

const Administration = () => {
    const [employees, setEmployees] = useState([]);
        const fetchEmployees = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "employees"));
                const employeesList = querySnapshot.docs.map((doc, index) => ({
                name: doc.data().name,
                designation: doc.data().designation,
            }));

            // Store the employee data in state
            setEmployees(employeesList);
        } catch (error) {
            console.error("Error fetching employees: ", error);
        }
    };

    // Fetch the data when the component mounts
    useEffect(() => {
        fetchEmployees();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            <h1 className='text-center text-3xl mt-5 mb-5'>Employee List</h1>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">Sno</th>
                            <th scope="col" className="px-6 py-3">Employee Name</th>
                            <th scope="col" className="px-6 py-3">Designation</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            employees.map((employee,index) => (
                                <tr key={employee.id} className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-200 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {employee.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {employee.designation}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Administration;
