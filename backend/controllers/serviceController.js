const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = async (req, res) => {
    try {
        const service = new Service(req.body);
        const createdService = await service.save();
        res.status(201).json(createdService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (service) {
            service.title = req.body.title || service.title;
            service.description = req.body.description || service.description;
            service.icon = req.body.icon || service.icon;
            service.image = req.body.image || service.image;
            service.category = req.body.category || service.category;
            
            const updatedService = await service.save();
            res.json(updatedService);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (service) {
            await service.remove();
            res.json({ message: 'Service removed' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getServices,
    createService,
    updateService,
    deleteService
};
