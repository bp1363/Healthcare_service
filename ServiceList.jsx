import React from 'react';

const ServiceList = ({ services, deleteService, editService }) => {
  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.length > 0 ? (
          services.map((service) => (
            <li key={service.id}>
              <strong>{service.name}</strong>: {service.description} - ${service.price}
              <button onClick={() => editService(service)}>Edit</button>
              <button onClick={() => deleteService(service.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No services available. Add a new service above.</p>
        )}
      </ul>
    </div>
  );
};

export default ServiceList;
