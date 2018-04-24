const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|20-30":[
            {
                "guid":"@guid",
                "text":"@cword(2,4)",
                "img|1":["static/img21.png","static/img23.png","static/img41.jpg","static/img42.png","static/img43.jpg","static/img44.png","static/img45.jpg","static/img46.jpg","static/img47.jpg"],
                "childrens|5-20":[
                    {
                        "guid":"@guid",
                        "text":"@cword(2,4)",
                    }
                ]
            }
        ]
    })
    res.send(result)
}