const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var text = req.query.clstext
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|8":[
            {
                "guid":"@guid",
                "text":"@cword(2,5)",
                "title":"@cword(2,5)",
                "childrens|5-10":[
                    {
                        "guid":"@guid",
                        "text":"@cword(2,5)",
                        "img|1":["/static/img48.jpg","/static/img49.jpg","/static/img51.jpg","/static/img50.jpg","/static/img52.jpg","/static/img53.jpg","/static/img54.jpg","/static/img55.jpg","/static/img56.jpg","/static/img57.jpg","/static/img58.jpg","/static/img59.jpg","/static/img60.jpg","/static/img61.jpg","/static/img62.jpg","/static/img63.jpg","/static/img64.jpg","/static/img65.jpg","/static/img66.jpg","/static/img67.jpg","/static/img68.jpg","/static/img69.jpg","/static/img70.jpg","/static/img71.jpg","/static/img72.jpg","/static/img73.jpg","/static/img74.jpg","/static/img75.jpg","/static/img76.jpg","/static/img77.jpg","/static/img78.jpg","/static/img79.jpg","/static/img80.jpg","/static/img81.jpg","/static/img82.jpg","/static/img83.jpg","/static/img48.jpg"],
                    }
                ]
            }
        ]
    })
    res.send(result)
}