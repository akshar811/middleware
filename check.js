
const check = (req, res, next) => {
    const { name, grid, course } = req.body;
  
    const errors = [];
  
    if (!name) {
      errors.push("Name is missing");
    }
  
    if (!grid) {
      errors.push("Grid is missing");
    }
  
    if (!course) {
      errors.push("Course is missing");
    }
  
    if (errors.length > 0) {
      res.status(400).json({ error: errors.join(", ") });
    } else {
      next();
    }
  };
  
module.exports = check;
  