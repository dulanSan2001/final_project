import React, { useState } from "react";
import axios from "axios";
import "./addpost.scss";

const CreatePost = () => {
  const [desc, setDesc] = useState(""); // Store the description of the post
  const [img, setImg] = useState("");  // Store the image URL
  const [isSubmitting, setIsSubmitting] = useState(false); // Track the submission state
  const [error, setError] = useState(""); // To display any errors

  // Handle text input change
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  // Handle image URL input change
  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!desc.trim()) {
      setError("Description is required.");
      return;
    }
  
    setIsSubmitting(true);
    setError("");
  
    const postData = {
      desc,
      img,
    };
  
    try {
      const response = await axios.post("http://localhost:8800/api/posts", postData, {
        withCredentials: true,  // Ensure the cookie is sent
      });
  
      setDesc("");
      setImg("");
      console.log("Post created successfully:", response.data);
    } catch (err) {
      // Log the error to the console for better visibility
      console.error("Error creating post:", err.response || err);
      if (err.response) {
        // Show more detailed error message from the server response
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
          onChange={handleDescChange}
          placeholder="What's on your mind?"
          rows="4"
          cols="50"
          required
        ></textarea>

        <input
          type="text"
          value={img}
          onChange={handleImgChange}
          placeholder="Image URL (optional)"
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
