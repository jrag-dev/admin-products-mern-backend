import mongoose from "mongoose";


export default function validateObjectId(req, res, next) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'This id is not valid'});
  }
  next();
}