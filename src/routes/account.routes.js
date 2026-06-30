const express=require("express")
const authMiddleware=require("../middleware/auth.middleware")
const router=express.Router()
const accountController=require("../controllers/account.controller")

/**
 -post/api/account
 -create a new account
 -protected route
 */
router.post("/",authMiddleware.authMiddleware,accountController.createAccountController)

module.exports=router