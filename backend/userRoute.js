import express from 'express';
import User from './userModel.js';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
        name: 'Mohamed',
        email: 'mohamed.n.othman@gmail.com',
        password: '123456',
        isAdmin: true
    });
        const newUser = await user.save();
        res.send(newUser);

    } catch (error) {
        res.send({msg: error.message});
    }    
});

export default router;