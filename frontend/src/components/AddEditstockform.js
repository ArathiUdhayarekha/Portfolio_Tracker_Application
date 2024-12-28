import React, { useState } from 'react';

function AddEditStockForm({ stock, onSave }) {
    const [formData, setFormData] = useState(stock || { name: '', ticker: '', quantity: 1, buyPrice: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Ticker:</label>
          <input type="text" name="ticker" value={formData.ticker} onChange={handleChange} required />

          <label>Quantity:</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />

          <label>Buy Price:</label>
          <input type="number" name="buyPrice" value={formData.buyPrice} onChange={handleChange} required />

          <button type="submit">Save</button>
      </form>
  );
}
export default AddEditStockForm;