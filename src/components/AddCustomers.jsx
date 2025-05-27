import React, { useState } from 'react';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    email: '',
    phone: '',
    loyalty: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses submit di sini, misalnya kirim ke API
    console.log('Data Customer:', formData);
  };

  return (
    <div>
      <h2>Form Pendaftaran Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer ID:
          <input
            type="text"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Nama Customer:
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          No. Telepon:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <label>
          Loyalty:
          <select
            name="loyalty"
            value={formData.loyalty}
            onChange={handleChange}
            required
          >
            <option value="">-- Pilih Loyalty --</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Bronze">Bronze</option>
          </select>
        </label>
        <br /><br />

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default CustomerForm;
