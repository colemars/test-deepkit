import { ReflectionClass } from "@deepkit/type";

class User {
  id = 0;
  username = "";
  password = "";
}

const properties = ReflectionClass.from(User).getProperties();
for (const property of properties) {
  console.log(property.name, property.type);
}
