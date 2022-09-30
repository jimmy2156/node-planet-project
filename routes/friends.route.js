const express = require('express')


const {getFriends, getFriendsById, addingFriends} = require('../controllers/friends.controllers')

const friendRouter = express.Router()
friendRouter.get('/',getFriends)
friendRouter.get('/:id', getFriendsById )




friendRouter.post('/', addingFriends)


module.exports = friendRouter

