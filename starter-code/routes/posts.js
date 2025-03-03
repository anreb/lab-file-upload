const express = require('express');
const passport = require('passport');
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const uploadCloud = require('../config/cloudinary');
const { postsView, newPostProcess, newPostView } = require('../controllers/posts.controller');
const { newCommentProcess, newCommentView } = require('../controllers/comments.controller');

router.get('/', postsView);

router.get('/new', newPostView);
router.post('/new', ensureLoggedIn('/login'), uploadCloud.single('photo'), newPostProcess);

router.get('/:id', newCommentView);
router.post('/:id/newComment', ensureLoggedIn('/login'), uploadCloud.single('photo'), newCommentProcess);

module.exports = router;
