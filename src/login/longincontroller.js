const userService = require('./loginService')

const createloginController = async (req, res) => {
    try{
        console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        console.log(status);
        if (status) {
            res.send ({'status': true, 'message': 'userCreated Succes'});
        } else {
            res.send({'status': false, 'message': 'error Creating a user'});
        }
    } catch (error) {
        console.log(error);
        // req.send({'status': false, 'message': error.msg})
    }
}


const loginUserController = async (req, res) => {
    var result = null;
    try{
        result = await loginService.LoginuserDBService(req.body);
        if (result.status) {
            res.send({'status': true, 'message': result.msg});
        } else {
            res.send({'status': false, 'message': result.msg});
        }
    } catch (error) {
        console.log(error)
        res.send({'status':false, 'message': error.msg})
    }
}

module.exports = { createloginController, loginUserController}

// loginUserController
