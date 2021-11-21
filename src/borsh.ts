import * as borsh from "borsh";

interface IUserContructor {
  id: number;
  name: string;
}

class User {
  id: number;
  name: string;
  constructor({ name, id }: IUserContructor) {
    this.name = name;
    this.id = id;
  }
}

const UserSchema: borsh.Schema = new Map([
  [
    User,
    {
      kind: "struct",
      fields: [
        ["id", "u32"],
        ["name", "string"],
      ],
    },
  ],
]);

const usr = new User({ id: 2, name: "wow" });
const buf = borsh.serialize(UserSchema, usr);

console.log(buf);

console.log(borsh.deserialize(UserSchema, User, Buffer.from(buf)));
