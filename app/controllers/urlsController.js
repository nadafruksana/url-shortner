const Url = require('../models/url')

module.exports.list=(req,res)=>{
    Url.find()
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
     const body = req.body
     const url = new Url(body)
     url.save()
     .then((url)=>{
         res.json(url)
     })
     .catch((err)=>{
         res.json(err)
     })
     
}
module.exports.show = (req, res) => {
    const id = req.params.id 
    Url.findById(id)
        .then((url) => {
            if(url) {
                res.json(url)
            } else {
                res.json({})
            }
        })
}
module.exports.update= (req,res)=>{
    const id = req.params.id
    const body = req.body
    Url.findByIdAndUpdate(id, body, {new:true, runValidators:true})
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Url.findByIdAndDelete(id)
    .then((url)=>{
        res.json(url)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.redirect = (req,res)=>{
    const hash = req.params.hash
    Url.findOne({urlHash:hash})
    .then((url)=>{
        res.redirect(url.url)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.redirect=(req,res)=>{
    const hash = req.params.hash
    // const clientData = req.useragent
    // const ip=req.clientIp
    
    // const click = {
    //     ipAddress:ip,
    //     browser:clientData.browser,
    //     platform:clientData.platform,
    //     device:clientData.Mobile? 'Mobile':'Desktop'
    // }
    Url.findOneAndUpdate({urlHash:hash},
            
                {new:true, runValidators:true})
              .then((url)=>{
               console.log(url)
            })
            .catch((err)=>{
                res.json(err)
            })
           // console.log(ip)
            Url.findOne({urlHash:hash})
            .then((url)=>{
                res.redirect(url.url)
            })
            .catch((err)=>{
                res.json(err)
            })
         }




