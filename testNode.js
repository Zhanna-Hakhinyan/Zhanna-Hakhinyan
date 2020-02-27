let http = require('http');
const data = [{
    id: 1,
    name: "Jony",
    age: 22
}];
http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.write(data);
        res.end();
    }
    if (req.method === 'DELETE') {
        const id = req.url.replace('/', '');
        if (id === 1) {
            delete data.id;
            res.write(data);
            res.end();
            
        } else {
            res.write("data not found")
            res.end()
        }

    } console.log('data');

    if(req.method==='POST'){
        const body =[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();

            console.log(parsedBody)
        });

    } else {
        res.write("data not found")
        res.end()
    }


    console.log(req.method);
    console.log(req.url);
}).listen(3002);
console.log("listen on: 3002");