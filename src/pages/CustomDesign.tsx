import React, { useState } from 'react';

function CurtainCustomizer() {
  const [formData, setFormData] = useState({
    color: 'White',
    design: 'Plain',
    material: 'Cotton',
    width: '',
    height: '',
    style: 'Eyelet',
    quantity: '',
    additionalNotes: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { width, height, name, phone } = formData;
    return width && height && name && phone;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all required fields (Name, Phone, Width, Height).');
      return;
    }

    // Construct the WhatsApp message
    const message = `
      New Custom Curtain Design Request:
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Design Details:
      - Color: ${formData.color}
      - Design: ${formData.design}
      - Material: ${formData.material}
      - Width: ${formData.width}
      - Height: ${formData.height}
      - Style: ${formData.style}
      - Quantity: ${formData.quantity}
      - Additional Notes: ${formData.additionalNotes}
    `;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/917397692446?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">🎨 Customize Your Curtains</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md p-8 rounded-xl">
        {/* COLOR */}
        <div>
          <label className="block mb-1 font-medium">Curtain Color</label>
          <select name="color" value={formData.color} onChange={handleChange} className="w-full border rounded p-2">
            {['White', 'Red', 'Blue', 'Green', 'Yellow', 'Black'].map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
        </div>

        {/* DESIGN */}
        <div>
          <label className="block mb-1 font-medium">Curtain Design</label>
          <select name="design" value={formData.design} onChange={handleChange} className="w-full border rounded p-2">
            {['Plain', 'Striped', 'Floral', 'Custom'].map((design) => (
              <option key={design}>{design}</option>
            ))}
          </select>
        </div>

        {/* MATERIAL */}
        <div>
          <label className="block mb-1 font-medium">Material</label>
          <select name="material" value={formData.material} onChange={handleChange} className="w-full border rounded p-2">
            {['Cotton', 'Silk', 'Polyester', 'Linen'].map((mat) => (
              <option key={mat}>{mat}</option>
            ))}
          </select>
        </div>

        {/* SIZE */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Width (inches)</label>
            <input
              type="number"
              name="width"
              value={formData.width}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="e.g., 50"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Height (inches)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="e.g., 84"
              required
            />
          </div>
        </div>

        {/* STYLE */}
        <div>
          <label className="block mb-1 font-medium">Curtain Style</label>
          <select name="style" value={formData.style} onChange={handleChange} className="w-full border rounded p-2">
            {['Eyelet', 'Rod Pocket', 'Pleated', 'Grommet', 'Tab Top'].map((style) => (
              <option key={style}>{style}</option>
            ))}
          </select>
        </div>

        {/* QUANTITY */}
        <div>
          <label className="block mb-1 font-medium">Quantity (sets/panels)</label>
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* NOTES */}
        <div>
          <label className="block mb-1 font-medium">Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="e.g. blackout lining, specific stitching, etc."
          />
        </div>

        {/* CONTACT INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>

        {/* SUBMIT ORDER */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
          >
            📤 Submit Custom Design Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CurtainCustomizer;
