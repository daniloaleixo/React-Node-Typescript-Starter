import * as express from 'express';
import * as supertest from "supertest";
import { ExpressApp } from '../src/config/app';

describe('Api tests', () => {

  let app: express.Express;

  beforeAll(() => {
    app = new ExpressApp().app;
    // Connect DB
  });
  afterAll((done) => {
    // Disconnect DB
  });


  test('should pass integration tests', (done) => {
    supertest(app)
      .get('/').then((response: any) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

});
