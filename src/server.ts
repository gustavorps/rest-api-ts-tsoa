import { app } from "./app";
import { variables } from './config/vars'

const { port } = variables;
if (process.env.NODE_ENV !== 'test')
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );


export { app }