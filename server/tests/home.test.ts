import * as request from "supertest";
// import * as app from "../src/app";

function sum(a, b) {
	return a && b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(true, true)).toBe(true);
});

// describe("GET /", () => {
//   it("should return 200 OK", (done) => {
//     request(app).get("/")
//       .expect(200, done);
//   });
// });
