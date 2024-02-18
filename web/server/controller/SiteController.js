const SiteModel = require('../models/Site.js');

// Controller function to handle getSites route
const getSites = async (req, res) => {
    try {
        // Retrieve all sites from the database
        console.log("HI");
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
