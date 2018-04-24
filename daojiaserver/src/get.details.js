const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data":[
            {
                "guid":"@guid",
                "title":"@cword(5,10)",
                "text":"@cword(4,8)",
                "price|5-100.1":5,
                "num|20-1000":20,
                "imgs|2-5":[
                    {
                    "pic|1":[
                        "static/img144.jpg","static/img145.jpg","static/img146.jpg","static/img147.jpg","static/img148.jpg","static/img149.jpg","static/img150.jpg","static/img151.jpg","static/img152.jpg"
                        ]
                    }
                ],
            }
        ]
    })
    res.send(result)
}