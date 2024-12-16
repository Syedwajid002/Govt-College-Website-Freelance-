import img from '../../assets/clg.jpg';

export default function UniversityWidget() {
  return (
    <div className="bg-gray-900 text-white p-8 w-full md:grid grid-cols-2 gap-3">
      <div>
        <img src={img} alt="" className="object-cover rounded-xl"/>
      </div>
      <div>
        <h2 className="text-red-500 text-lg md:text-xl font-semibold mt-10 md:mt-0">Why Study at</h2>
        <h1 className="text-3xl md:text-5xl font-bold my-2">MJPTBCWRDC?</h1>
        <ul className="text-base md:text-lg list-disc ml-4">
          <li>Embrace a Global Community: Our vibrant campus welcomes minds from across the globe, fostering a diverse and enriching learning environment.</li>
          <li>Exceptional Faculty Expertise: Benefit from the guidance of over 100 proficient instructors, each holding esteemed degrees from top-tier institutions, ensuring a world-class education.</li>
          <li>Thriving Sports Culture: With a remarkable sports rating of 98%, our university promotes a balanced lifestyle, encouraging physical activity and teamwork in a supportive and dynamic atmosphere.</li>
        </ul>
      </div>
    </div>
  );
}
