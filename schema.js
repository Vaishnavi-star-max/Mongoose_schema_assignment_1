const mongoose= require("mongoose")

const userSchema=new mongoose.Schema({
    username: {type: String,
               required:true,
               unique:true},

    email: {type: String,
             require:true,
             unique:true },

    password: {type:String,
             require:true },

    roles: {type:[String],
            require:true},      
})

const ProfileSchema=new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,
          ref:'User' },

    firstname: {type:String,
                required:true},

    lastname: {type:String,
                require:true},  
              
        age: { type:Number,
                require:true},       
                           
})

const TrackingSchema=new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,
        ref:'User' },
    lastlogin:{type:Date,
               require:true},

     
})

const UserModel=mongoose.model('User',userSchema);
const ProfileModel=mongoose.model('Profile',ProfileSchema);
const TrackingModel=mongoose.model('Tracking',TrackingSchema);

module.exports=UserModel;