import { response } from "express";
import { user } from "../db.json";

console.log(user);

const Getuser = (req, res) => {
  return res.status(200).json({ success: true, data: user });
};

const GetuserById = (req, res) => {
  const { id } = req.params;

  const person = user.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no user found in this id ${id}` });
  }
  return res.status(200).json({ success: true, data: person });
};

const Adduser = (req,res) => {
  response = {
   first_name : req.body.first_name,
   last_name : req.body.last_name,
   email : req.body.email,
   gender : req.body.gender
  }
   return res.end(response)
}

const Updateuser = (req,res) => {

  const {id} = req.params
  const {first_name} = req.body
  const {last_name} = req.body
  const {email} = req.body

  const person = user.find((p) => p.id === Number(id));


  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no user found in this id ${id}` });
  }

  const updatedata = user.map((p) => {
    if (p.id === Number(id)) {
       p.first_name = first_name;
       p.last_name = last_name;
       p.email = email;
    }
    return user
  })
  res.status(200).json({success:true, data:updatedata})
}

 const Deleteuser = (req,res) => {
    const {id} = req.body

    const person = user.find((p) => p.id === Number(id));

    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `no user found in this id ${id}` });
    }

    const deleteuser = user.splice(id,1)
    return res.status(200).json({success : true, data : deleteuser})
 }

export default { Getuser, GetuserById, Updateuser,Adduser, Deleteuser};
