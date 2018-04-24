const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|3-8":[
            {
                "id|+1":1,
                "guid":"@guid",
                "title":"@ctitle",
                "total|50-120.2":50,
                "num|4-15":4,
                "date":"@date('MM-dd')",
                "time":"@time('HH:mm')",
                "imgs|2-4":[
                    {
                    "pic|1":[
                        "/static/img144.jpg","/static/img145.jpg","/static/img146.jpg","/static/img147.jpg","/static/img148.jpg","/static/img149.jpg","/static/img150.jpg","/static/img151.jpg","/static/img152.jpg","/static/img92.jpg","/static/img93.jpg","/static/img94.jpg","/static/img95.jpg","/static/img96.jpg","/static/img97.jpg","/static/img98.jpg","/static/img99.jpg","/static/img100.jpg","/static/img101.jpg","/static/img102.jpg","/static/img103.jpg","/static/img104.jpg","/static/img105.jpg","/static/img106.jpg","/static/img107.jpg","/static/img108.jpg","/static/img109.jpg","/static/img110.jpg","/static/img111.jpg","/static/img112.jpg","/static/img113.jpg","/static/img114.jpg","/static/img115.jpg","/static/img116.jpg"
                        ],
                    "price|5-80.2":5,
                    }
                ],
            }
        ]
    })
    res.send(result)
}