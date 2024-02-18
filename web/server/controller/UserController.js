const User = require('../models/User.js');

// Controller function to handle getSites route
const login = async (req, res) => {
    try {
        // Retrieve all sites from the database
        const sites = await SiteModel.find().select("sitename");
        console.log(sites);

        
        // Return the list of sites in the response
        res.json(sites);
    } catch (error) {
        console.error('Error retrieving sites:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getSites
};