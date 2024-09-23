import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, updateService, currentService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [currentService]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      alert('All fields are required!');
      return;
    }

    const service = { name, description, price: parseFloat(price) };

    if (currentService) {
      updateService({ ...service, id: currentService.id });
    } else {
      addService(service);
    }

    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentService ? 'Edit Service' : 'Add a New Service'}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">
        {currentService ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
};

export default ServiceForm;
