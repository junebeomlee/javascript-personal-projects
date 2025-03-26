// var msg = require("./second.js")
// console.log(msg);
var fs = require("fs")
var http = require("http")
var path = require("path")

// http.createServer(function(req, res){
//     fs.readFile("index.html", (err,data) => {
//         res.writeHead(200, {"Content-Type" : "test/html"})
//         res.write(data);
//         return res.end()
//     })
// }).listen(8000)

// fs.readFile("./src/index.html",(error, data) => {
//     console.log(Buffer.toString(data))
// })

// var file = require("./src/index.html")
// fs.readFile(file,(err,data) => {
//     console.log(data)
// })
// function getInfo() {}

// console.log(path.extname("./file.srt"))

// fs.stat("./file.smi.srt", (error, status) => {
//     console.log(status)
// })


fs.readFile("./file.smi.srt", (err, data) => {
    // console.log(data.toString("utf8"))
    let content = data.toString("utf8")
    // content = content.split("\n")
    // content = content.split("")
    content = content.split(/\n\s*\n/)

    content = content.map(coment => coment.split("\n"))
    console.log(content)

    // id, time:{start, end}, text[]
    // new Object({id : content[0][0], time:conent[0][1], text: content})
    // console.log(content[0])

    // for(let start = 2; start <= content.length; start++) {

    // }
    // console.log(content[0].slice(2))

    // console.log(content = content.map(coment => {
    //     let start, end
    //     if(coment[1] !== undefined) [start, end] = coment[1].split(" --> ")
            
    //         return {
    //             id: coment[0],
    //             time: { start, end },
    //             text: coment.slice(2)
    //         }

    // }))
    // let coment = new Object({
    //     id: coment[0][0],
    //     time: {
    //         start : time[0],
    //         end: time[1]
    //     },
    //     text: []
    // })
    // console.log(coment)
    // for(text of content) {
        // if(text == "") console.log("비었다구요")
    // }
    // JSON.parse(content)

})

