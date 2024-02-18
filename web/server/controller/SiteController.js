const SiteModel = require('../models/Site.js');

// Controller function to handle getSites route
const getSites = async (req, res) => {
    try {
        // Retrieve all sites from the database
        const sites = await SiteModel.find().select('sitename');
        
        // Return the list of sites in the response
        res.json(sites);
        
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};






module.exports = {
    getSites
};
