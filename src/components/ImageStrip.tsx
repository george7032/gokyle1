import strip1 from '@/assets/strip-1.jpeg';
import strip2 from '@/assets/strip-2.jpeg';
import strip3 from '@/assets/strip-3.jpeg';
import strip4 from '@/assets/strip-4.jpeg';
import strip5 from '@/assets/strip-5.jpeg';
import strip6 from '@/assets/strip-6.jpeg';
import strip7 from '@/assets/strip-7.jpeg';
import strip8 from '@/assets/strip-8.jpeg';
import strip9 from '@/assets/strip-9.jpeg';
import strip10 from '@/assets/strip-10.jpeg';
import strip11 from '@/assets/strip-11.jpeg';
import strip12 from '@/assets/strip-12.jpeg';

const images = [
  strip1, strip2, strip3, strip4, strip5, strip6,
  strip7, strip8, strip9, strip10, strip11, strip12,
];

const ImageStrip = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative -mt-24 z-10 overflow-hidden bg-gradient-to-b from-transparent via-background/50 to-background py-8">
      <div className="flex animate-scroll-strip">
        {duplicatedImages.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 mx-2 rounded-lg overflow-hidden img-zoom shadow-lg"
          >
            <img 
              src={image}
              alt={`Safari experience ${(index % images.length) + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageStrip;
