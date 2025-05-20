import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const Track = () => {
  const [color, setColor] = useState<string>('White');
  const [overlayColor, setOverlayColor] = useState<string>('white');
  const previewRef = useRef(null);

  const handleDownload = async () => {
    const previewElement = previewRef.current;
    if (previewElement) {
      const canvas = await html2canvas(previewElement, {
        useCORS: true,
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `curtain-${color}.png`;
      link.click();
    }
  };

  const curtainImage =
    'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206967_1_medium.jpg';

  const colorOptions = [
    { name: 'White', code: 'white' },
    { name: 'Teal', code: '#008080' },
    { name: 'Beige', code: '#DABE9B' },
    { name: 'Red', code: 'red' },
    { name: 'Black', code: 'black' },
    { name: 'Blue', code: '#1E90FF' },
    { name: 'Olive', code: '#808000' },
    { name: 'Purple', code: '#800080' },
    { name: 'Gray', code: '#808080' },
    { name: 'Peach', code: '#FFDAB9' },
  ];

  const handleColorClick = (name: string, code: string) => {
    setColor(name);
    setOverlayColor(code);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Customize and Download Your Curtain
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Curtain Preview */}
        <div className="flex-1 flex items-center justify-center">
          <div
            ref={previewRef}
            className="relative w-72 h-96 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={curtainImage}
              alt="Curtain"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: overlayColor,
                opacity: 0.4,
              }}
            />
          </div>
        </div>

        {/* Right: Color Circles & Download */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">COLOR</label>
            <div className="flex flex-wrap gap-4">
              {colorOptions.map((col) => (
                <button
                  key={col.name}
                  type="button"
                  title={col.name}
                  className={`w-12 h-12 rounded-full border-4 ${
                    color === col.name ? 'border-gray-500 shadow-md' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: col.code }}
                  onClick={() => handleColorClick(col.name, col.code)}
                />
              ))}
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Download Customized Curtain
          </button>
        </div>
      </div>
    </div>
  );
};

export default Track;
