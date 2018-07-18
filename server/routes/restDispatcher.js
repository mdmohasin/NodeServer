import path from 'path';
import express from 'express';
import userHandlers from '../controller/user_controller';
import imageHandlers from '../controller/image_controller';
import isLoggedIn from '../routes/restAuth';
import { consoleLog } from '../utils/logging';

const router = new express.Router();
router.get('/', (req, res) => {
    consoleLog('first route hit');
    res.sendfile(path.join(__dirname, '../../client/index.html'));
});

/** *************************** <start>users dispatchers *********************************/
/** *************************** <start>users dispatchers *********************************/
router.post('/login', (req, res) => {
    const payload = req.body;
    userHandlers.loginUser(payload, (error, success) => {
        res.json(success);
    });
});
/** *************************** <end>users dispatchers *********************************/
/** *************************** <end>users dispatchers *********************************/

/** *************************** <start>task dispatchers *********************************/
router.post('/getImageThumnail', isLoggedIn, (req, res) => {
    imageHandlers.getImageThumnail((error, success) => {
        res.json(success);
    });
});
/** *************************** <end>task dispatchers **********************************/
module.exports = router;
