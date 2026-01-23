import User from "../model/auth-model.js";

// note : first check if the email is already exist if not only then save new user
export const createUser = async (req , res) =>{
    const {email , userId } = req.body 
    try{

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({ msg : "user already exist" })

        }

        const newUser = new User({email , userId})
        await newUser.save()

        res.status(200).json({
            msg : "user successfull save",
            user : email
        })

    }catch(err){
        console.log(err)
    }

}



export const checkUser = async ( req , res) => {
    const {email} = req.body

    try{

        const user = await User.findOne({email})

        if(user){
            return res.status(200).json({ user : true })
        }

        return res.status(200).json({ user : false })

    }catch(err){
        console.log(err)
    }


}