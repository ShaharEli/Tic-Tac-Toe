const app = require('./start') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
const fs = require('fs').promises

test('server get',async () => {
    await  request.get("/api/v1/records")
    .expect([{"name":"Shahar","date":"08-19-2020  20:07:05","time":"3 seconds"}])
});
test('server post',async () => {
    await  request.post("/api/v1/record")
    .send({"name":"Shahar","date":"08-19-2020  20:07:05","time":"3 seconds"})
    .expect("done")
});
test("server get after post",async()=>{
    await  request.get("/api/v1/records")
    .expect([{"name":"Shahar","date":"08-19-2020  20:07:05","time":"3 seconds"},{"name":"Shahar","date":"08-19-2020  20:07:05","time":"3 seconds"}])
    await fs.writeFile("./records1.json",'[{"name":"Shahar","date":"08-19-2020  20:07:05","time":"3 seconds"}]')

})

  
  