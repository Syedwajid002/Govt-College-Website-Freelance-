import { Card } from 'flowbite-react';

export default function PrincipalCard({ name, img, period }) {

  
  return (
    <Card
      data-aos="fade-up"
      className="max-w-xs mx-auto my-4 hover:shadow-xl transition-transform transform hover:scale-105 ease-in-out"
      style={{ width: '300px', height: '400px' }} // Set fixed dimensions
    >
      <div className="relative overflow-hidden aspect-w-4 aspect-h-5"> {/* Maintain aspect ratio */}
        <img
          src={img}
          alt={name}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {name}
        </h5>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {period}
        </p>
      </div>
    </Card>
  );
}
