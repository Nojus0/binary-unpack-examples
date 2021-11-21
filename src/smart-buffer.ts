import { SmartBuffer } from "smart-buffer";

// * No Array Support *

interface IUser {
  id: number;
  name: string;
}

function createUser(id: number, name: string) {
  const b = new SmartBuffer();
  b.writeUInt32LE(id);
  b.writeStringNT(name);
  return b.toBuffer();
}

function readUser(bfr: Buffer): IUser {
  const b = SmartBuffer.fromBuffer(bfr);

  return {
    id: b.readUInt32LE(),
    name: b.readStringNT(),
  };
}
const usr = createUser(21, "nickname");

console.log(usr);

console.log(readUser(usr));
