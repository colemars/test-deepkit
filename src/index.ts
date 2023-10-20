import { valuesOf } from "@deepkit/type";

type Groups = "admin" | "user" | "guest";

const groups = valuesOf<Groups>(); // ['admin', 'user', 'guest']

console.log("groups", groups);
