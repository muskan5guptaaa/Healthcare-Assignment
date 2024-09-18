const express = require('express');
const {
  addService,
  getAllServices,
  updateService,
  deleteService,
} = require('../controllers/serviceController');

const router = express.Router();

// API Endpoints
router.post('/services', addService);        // Add a new service
router.get('/services', getAllServices);     // Get all services
router.put('/services/:id', updateService);  // Update a service
router.delete('/services/:id', deleteService); // Delete a service

module.exports = router;
