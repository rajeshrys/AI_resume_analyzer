const express  = require("express")
const router = express.Router()
const authController = require("../controller/auth.controller")
const authmiddleware = require("../middlewares/auth.middleware")

/**
 * @route POST /api/auth/register
 * @description Register new User
 * @access public
 */
router.post('/register',authController.register)


/**
 * @route POST /api/auth/login
 * @description login's new User
 * @access public
 */
router.post('/login',authController.login)


/**
 * @route POST /api/auth/logout
 * @description logout's new User
 * @access public
 */
router.get('/logout',authController.logout)

/**
 * @route POST /api/auth/getme
 * @description Getting the user details
 * @access private
 */
router.get('/getme',authmiddleware.authMiddleware,authController.getme)




module.exports = router