// Controller function to handle the request
export const getComments = (req, res) => {
    // You could later fetch this from a database
    const comments = [
      { id: 1, text: "Nice post!" },
      { id: 2, text: "Interesting thoughts." },
    ];
  
    res.status(200).json(comments); // Step 4
  };
  