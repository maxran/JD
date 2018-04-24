const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var text = req.query.ctgtext
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        ctgText:text,
        "count|10-18":10,
        "data|10-18":[
            {
                "guid":"@guid",
                "text":"@cword(2,5)",
                "price|1-100.2":0,
                "store|0-10":0,
                "mon|20-2800":20,
                "per|75-100":75,
                "img|1":["/static/img92.jpg","/static/img93.jpg","/static/img94.jpg","/static/img95.jpg","/static/img96.jpg","/static/img97.jpg","/static/img98.jpg","/static/img99.jpg","/static/img100.jpg","/static/img101.jpg","/static/img102.jpg","/static/img103.jpg","/static/img104.jpg","/static/img105.jpg","/static/img106.jpg","/static/img107.jpg","/static/img108.jpg","/static/img109.jpg","/static/img110.jpg","/static/img111.jpg","/static/img112.jpg","/static/img113.jpg","/static/img114.jpg","/static/img115.jpg","/static/img116.jpg",]
            }
        ]
    })
    res.send(result)
}
