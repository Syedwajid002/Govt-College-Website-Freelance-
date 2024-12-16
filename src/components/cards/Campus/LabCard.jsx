import React from 'react';
import { Card } from 'flowbite-react';

export default function LabCard({ name, department, img }) {
  return (
    <Card className="w-72 overflow-hidden  rounded-lg mx-auto bg-bg border-none">
      <img
        className="w-60 h-60 object-cover object-center rounded-full"
        src={img}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="mt-2 text-gray-600">{department}</p>
      </div>
    </Card>
  );
}

