import { hello } from "./hello";
import { MinLength, typeOf } from "@deepkit/type";

type Username = string & MinLength<3>;

interface User {
  username: Username;
  password: string;
  created: Date;
}

const type = typeOf<User>([]);
console.log("Type introspection", type);
// console.log("Type stringify", stringifyResolvedType(type));

console.log(hello());
