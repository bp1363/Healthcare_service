import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setCurrentService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const editService = (service) => {
    setCurrentService(service);
  };

  return (
    <div className="App">
      <h1>Healthcare Services Management</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        currentService={currentService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        editService={editService}
      />
    </div>
  );
}

export default App;
