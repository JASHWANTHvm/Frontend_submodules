import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const faqs = [
  { question: 'What sizes are available for these curtains?', answer: 'These curtains are available in standard sizes: 54x84 inches, 54x96 inches, and 54x108 inches.' },
  { question: 'Are these curtains machine washable or dry clean only?', answer: 'Most of these curtains are machine washable. Please check the product label for specific care instructions.' },
  { question: 'Do these curtains provide complete blackout or just room darkening?', answer: 'Some curtains provide complete blackout, while others are designed for room darkening. Check the product description for details.' },
  { question: 'Are these curtains suitable for use in humid environments?', answer: 'Yes, these curtains are made from materials that resist moisture and are suitable for humid environments.' },
  { question: 'Do these curtains come with tiebacks?', answer: 'Some curtains come with tiebacks. Please check the product details to confirm.' },
  { question: 'How do I measure my windows for these curtains?', answer: 'Measure the width and height of your window frame and add 4-6 inches on each side for proper coverage.' },
  { question: 'Can these curtains be used in a room with direct sunlight?', answer: 'Yes, these curtains are designed to withstand direct sunlight and provide UV protection.' },
  { question: 'Are these curtains fade-resistant?', answer: 'Yes, these curtains are made from fade-resistant materials to maintain their color over time.' },
  { question: 'Are these curtains safe for children?', answer: 'Yes, these curtains are free from harmful chemicals and safe for children.' },
  { question: 'Do these curtains provide thermal insulation?', answer: 'Yes, thermal insulated curtains are available to help regulate room temperature.' },
  { question: 'Can I return the curtains if they don’t match my living room wall?', answer: 'Yes, you can return the curtains within 30 days of purchase if they don’t match your living room wall.' },];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://cdn.ddecor.com/media/wysiwyg/l2-banners_1252x508-cleaopatra-ii.jpg',
    'https://cdn.ddecor.com/media/wysiwyg/l2-curtain-3.jpg',
    'https://cdn.ddecor.com/media/wysiwyg/l2-curtain-1.jpg',
    'https://cdn.ddecor.com/media/wysiwyg/l2-curtain-3.jpg',
    'https://cdn.ddecor.com/media/wysiwyg/l2-curtain-2.jpg',
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Us Section */}
      

      {/* Carousel Section */}

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <div className="relative max-w-4xl mx-auto mb-12">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-96 object-cover"
          />
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
        <p className="text-lg text-gray-600">
          Welcome to Sakthi Murugan Curtains – Erode’s Trusted Home Décor Destination!
          At Sakthi Murugan Curtains, we believe that your home should reflect your personal style and bring comfort to everyday living. Established near Arts College, Shastri Nagar, Erode, we have proudly served the local community with premium-quality curtains, blinds, and furnishing accessories.
          With years of experience in the home décor industry, we specialize in custom-made curtains, window blinds, sofa upholstery, cushion covers, and a variety of furnishing fabrics. Whether you’re decorating your living room, upgrading your office interiors, or transforming your bedroom, we offer tailor-made solutions that blend aesthetics with functionality.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none"
              >
                {faq.question}
              </button>
              {openFaq === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;