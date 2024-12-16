import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase-config';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotification = async () => {
    try {
      const docRef = doc(db, 'Notifications', 'kY8eT51rYgRVEZv37yht');
      const getData = await getDoc(docRef);
      if (getData.exists()) {
        const notificationsData = getData.data().Notification;
        setNotifications(notificationsData);
      } else {
        console.log("No such document found");
      }
    } catch (e) {
      console.log("Error fetching data from Notifications", e);
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  return (
    <div className="md:overflow-hidden overflow-scroll whitespace-nowrap flex flex-col items-center bg-white-600 text-black text-base md:text-xl p-2">
      <div className="text-center text-red-600 text-2xl border-b-2 border-black mb-5">Alert! Notifications</div>
      <div className="">
        <table className="border border-2 border-black w-full">
          <thead>
            <tr>
              <th className="border border-2 border-black  px-4 py-2">S.No</th>
              <th className="border border-2 border-black  px-4 py-2">Notifications</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index} className="border-t border-black">
                <td className="border border-2 border-black  px-4 py-2">{index + 1}</td>
                <td className="border border-2 border-black  px-4 py-2">{notification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
