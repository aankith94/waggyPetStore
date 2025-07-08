import jwt from "jsonwebtoken";
const Token = (id) => {
  const tokenGen = jwt.sign({ id: id }, process.env.seckey);
  console.log(tokenGen, "GeneratingToken");

  const decode = jwt.verify(tokenGen, process.env.seckey);
  console.log(decode, "decoding logintime");

  return { tokenGen, decode };
};
export default Token;
