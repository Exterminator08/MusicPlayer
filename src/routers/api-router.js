const apiRouter = require('express').Router();
const { Post } = require('../../db/models'); //! ????????????????????????

apiRouter.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = apiRouter;
