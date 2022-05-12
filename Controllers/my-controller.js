import { user } from "../data";

console.log(user);
const Getuser = (req, res) => {
  return res.status(200).json({ success: true, data: user   });
};

export default { Getuser };
