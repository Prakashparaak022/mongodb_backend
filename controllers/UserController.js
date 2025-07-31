const { isValidObjectId } = require("../utils/Validation");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidId = isValidObjectId(id);

    if (!isValidId) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User Not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidId = isValidObjectId(id);

    if (!isValidId) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }
    const user = await User.findByIdAndUpdate(id, req.body);
    if (user) {
      const updatedUser = await User.findById(id);
      res.status(202).json(updatedUser);
    } else {
      res.status(404).json({ message: "User Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidId = isValidObjectId(id);

    if (!isValidId) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ message: "User Not found" });
    } else {
      res.status(200).json({ message: "User deleted Successfully !" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };