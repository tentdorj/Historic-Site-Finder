import User from '../models/User.js'


export const login = async (req, res) => { 
    const userResponse = await tryLogin(req.body);
    res.json(userResponse);
}