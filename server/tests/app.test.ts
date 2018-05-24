import * as request from "supertest";
// import * as app from "../src/app";

function sum(a, b) {
	return a && b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(true, true)).toBe(true);
});

// describe("GET /random-url", () => {
//   it("should return 404", (done) => {
//     request(app).get("/reset")
//       .expect(404, done);
//   });
// });
