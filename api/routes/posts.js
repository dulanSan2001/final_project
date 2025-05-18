import express from "express";
import { getPosts, addPost, deletePost } from "../controllers/post.js";
import upload from "../upload.js";

const router = express.Router();

router.get("/allposts", getPosts);
router.post("/",upload.single("img"), addPost);
router.delete("/:id", deletePost);

export default router;