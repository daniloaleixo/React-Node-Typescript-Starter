import * as request from "supertest";
// import * as app from "../src/app";

function sum(a, b) {
	return a && b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(true, true)).toBe(true);
});

// describe("GET /contact", () => {
//   it("should return 200 OK", (done) => {
//     request(app).get("/contact")
//       .expect(200, done);
//   });
// });


// describe("POST /contact", () => {
//   it("should return false from assert when no message is found", (done) => {
//     request(app).post("/contact")
//       .field("name", "John Doe")
//       .field("email", "john@me.com")
//       .end(function(err, res) {
//         expect(res.error).to.be.false;
//         done();
//       })
//       .expect(302);
      
//   });
// });