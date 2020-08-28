const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const sh = require('shorthash')

const urlSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isURL(value)
            },
            message:function(){
                return 'given url is not proper'
            }
        }
    },
    hashedUrl:{
        type:String,
    },
    clicks:
        [{clickDateTime: {type:Date,default:Date.now} ,
            ipAddress:String,
            browser:String,
            platform:String,
            device:String
        }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})
urlSchema.pre('save',function(next){
    const hash=sh.unique(this.originalUrl)
    if(this.originalUrl !==''){
        this.hashedUrl= hash
        console.log(this.hashedUrl)
    }
    next()
})
const Url  = mongoose.model('Url', urlSchema)
module.exports = Url