import img from './top.jpg'
export const HalfPageBanner = ({ name }) => {
    // Replace 'your-image-url.jpg' with the URL of your background image
    const backgroundImageUrl =img;
  
    return (
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Overlay for blur effect */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
  
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">{name}</h1>
  
          {/* You can add a call-to-action button here if needed */}
        </div>
      </div>
    );
  };
