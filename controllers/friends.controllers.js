const friends = require('../model/friends.model')
const path = require('path')





function getFriends(req,res) {
    
    res.status(200).sendFile(path.join(__dirname, '..', 'images', 'OMn7uf.jpg' ))
}
function getFriendsById(req,res) {
    const friendId = Number(req.params.id)
    const number1 = friends[friendId]
    if (number1) {
        res.status(200).json(number1)
    } else{
        res.status(404).json({msg: 'Friend does not exist'})
    }

}
function addingFriends(req,res) {
    const newFriend = {
        id: friends.length,
        name: req.body.name
    }
    if (!req.body.name) {
        return res.status(404).json({msg: 'invalid request'})
    }
    friends.push(newFriend)
    res.status(201).json(friends)
}
module.exports = {getFriends, getFriendsById, addingFriends}