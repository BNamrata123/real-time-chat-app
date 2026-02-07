const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const multer = require("multer");
const path = require("path");

// File upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Upload endpoint
router.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json({
      url: `http://localhost:5000/uploads/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Save text/image message
router.post("/", async (req, res) => {
  try {
    const newMsg = new Message(req.body);
    const savedMsg = await newMsg.save();
    res.status(200).json(savedMsg);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get messages by room
router.get("/:room", async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.room });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
