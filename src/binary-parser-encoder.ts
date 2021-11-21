import { Parser } from "binary-parser-encoder";

const UserData = new Parser()
  .uint32("id")
  .string("name", { zeroTerminated: true });

interface IUserContructor {
  id: number;
  name: string;
}
const wanted: IUserContructor = {
  id: 21,
  name: "daas",
};

const a = UserData.encode(wanted);

console.log(UserData.parse(a));
