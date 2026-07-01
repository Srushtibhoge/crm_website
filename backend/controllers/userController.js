const userModel = require("../models/userModel");

const saveUser = async (req, res) => {
  console.log("req", req.body);
  try {
    const { name, email, company, phno, status, notes } = req.body;

    let user = await userModel.findOne({ email });

    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = await userModel.create({
      name,
      email,
      company,
      status,
      phno,
      notes,
    });

    res.status(201).json({
      success: true,
      message: "User saved successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log("error", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const editUsers = async (req, res) => {
  try {
    const { name, company, status, notes } = req.body;
    const { id } = req.params;

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, company, status, notes },
      { returnDocument: "after" },
    );

    return res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { saveUser, getUserById, getUsers, editUsers };
