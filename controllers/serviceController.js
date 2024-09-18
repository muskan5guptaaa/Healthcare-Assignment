const Service = require('../models/Service');

// Add a new service
exports.addService = async (req, res) => {
  const { name, description, price } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ message: 'Service name and price are required' });
  }

  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: 'Error adding service', error });
  }
};

// Get all services
// Get all services
exports.getAllServices = async (req, res) => {
    try {
      // Fetch all services from the Service collection
      const services = await Service.find();
  
      // If no services are found, send a 404 response
      if (!services || services.length === 0) {
        return res.status(404).json({ message: 'No services found' });
      }
  
      // If services are found, send a 200 response with the services data
      res.status(200).json(services);
    } catch (error) {
      // Handle any errors during the fetching process
      res.status(500).json({ message: 'Error fetching services', error });
    }
  };
  

// Update a service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: 'Error updating service', error });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting service', error });
  }
};
