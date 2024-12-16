import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../pages/Firebase-config';

const ScrollingNotification = () => {
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
    <div className="overflow-hidden whitespace-nowrap flex items-center bg-red-600 text-yellow-300 text-base p-2">
      <div className="animate-scroll inline-flex">
        {notifications.map((notification, index) => (
          <p key={index} className="mx-4">{notification} ||</p>
        ))}
      </div>
    </div>
  );
};

export default ScrollingNotification;
