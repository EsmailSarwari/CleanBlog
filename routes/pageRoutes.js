import express from 'express';
const router = express.Router();

import * as pagesController from '../controllers/pagesController.js';

router.route('/add_post').get(pagesController.getAddPostpage);
router.route('/about').get(pagesController.getAboutPage);

export default router;
