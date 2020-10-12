const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const short = require('short-uuid');
 
const sh = require('shorthash')

const urlSchema = new Schema({
    
    url:{
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
    urlHash:{
        type:String,
    },
})
short.generate();
urlSchema.pre('save',function(next){
    const hash=sh.unique(this.url)
    if(this.url !==''){
        this.urlHash= hash
        
    }
    next()
})
const Url  = mongoose.model('Url', urlSchema)
module.exports = Url