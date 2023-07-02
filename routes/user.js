import express from "express";
import newUser from "../models/user.js";
const router = express.Router();
async function updateUser(users, updateParams) {
  let updatedUsers;
  try {
    const ids = users.map((user) => user.id);
    updatedUsers = await newUser
      .updateMany({ id: { $in: ids } }, { $set: updateParams })
      .exec();
    return updatedUsers;
  } catch (err) {
    return { Error: err.message };
  }
}
router.get("/", async (req, res) => {
  try {
    const usersList = await newUser.find(
      {},
      {
        _id: 0,
        id: 1,
        name: 1,
        email: 1,
        role: 1,
        signup_date: 1,
        status: 1,
      }
    );
    res.json(usersList);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const selectedUsers = req.body;
    const ids = selectedUsers.map((user) => user.id);
    const deletedUsers = await newUser.deleteMany({ id: { $in: ids } });
    res.json(deletedUsers);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

router.put("/block", async (req, res) => {
  try {
    const users = req.body;
    const updatedUsers = await updateUser(users, { status: "blocked" });
    res.json(updatedUsers);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

router.put("/unblock", async (req, res) => {
  try {
    const users = req.body;
    const updatedUsers = await updateUser(users, { status: "active" });
    res.json(updatedUsers);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

router.put("/add-admin", async (req, res) => {
  try {
    const users = req.body;
    const updatedUsers = await updateUser(users, { role: "admin" });
    res.json(updatedUsers);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

router.put("/delete-admin", async (req, res) => {
  try {
    const users = req.body;
    const updatedUsers = await updateUser(users, { role: "user" });
    res.json(updatedUsers);
  } catch (err) {
    res.json({ Error: err.message });
  }
});

export default router;
