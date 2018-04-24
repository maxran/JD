const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|5":[
            {
                "id|+1":1,
                "guid":"@guid",
                "title":"@ctitle",
                "star|1-5":"★",
                "img|1":["static/img21.png","static/img23.png","static/img41.jpg","static/img42.png","static/img43.jpg","static/img44.png","static/img45.jpg","static/img46.jpg","static/img47.jpg"],
                "time|1-59":1,
                "num|500-10000":500,
                "distance|0-3.2":0,
                "price|0-10":0,
                "sales|0-10":[
                    {
                        "act|1":[
                            "领券",
                            "首单",
                            "优惠",
                            "运费",
                        ],
                        "text|1":[
                            "满100减50",
                            "满200减120",
                            "满80减20",
                            "满70减10",
                        ]                    
                    }
                ]
            }
        ]
    })
    res.send(result)
}