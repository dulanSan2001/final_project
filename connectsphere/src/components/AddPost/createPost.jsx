import React, { useState } from "react";
import axios from "axios";
import "./addpost.scss";

const CreatePost = () => {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!desc.trim()) {
      setError("Description is required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const formData = new FormData();
    formData.append("desc", desc);
    if (file) formData.append("img", file);

    try {
      const response = await axios.post("http://localhost:8800/api/posts", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDesc("");
      setFile(null);
      console.log("Post created successfully:", response.data);
    } catch (err) {
      console.error("Error creating post:", err.response || err);
      if (err.response) {
        setError(err.response.data || "An error occurred while creating the post.");
      } else {
        setError("Network error, please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post">
      <h3>Create a Post</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="What's on your mind?"
          rows="4"
          cols="50"
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Post"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CreatePost;
