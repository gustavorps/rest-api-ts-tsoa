import express, { Response as ExResponse, Request as ExRequest } from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
import actuator from 'express-actuator'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import { variables } from './config/vars'
const { logs } = variables

const app = express();

app.use(morgan(logs))
app.use(actuator())
app.use(cors())

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(compress())

app.use(methodOverride())

app.use(helmet())

RegisterRoutes(app);

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

export { app }