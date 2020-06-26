import { app } from "./app";
import { variables } from './config/vars'

const { port } = variables;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);