import * as fs from 'fs';

// API: http://localhost:3000/api/gebblogs?slug=how-to-lern-javascript
export default function handler(req, res) {
  const slug = req.query.slug;

  // 1️⃣ Slug check
  if (!slug) {
    return res.status(400).json({ error: "No slug provided" });
  }

  const filePath = `blogdata/${slug}.json`;

  // 2️⃣ File existence check
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "No such blog found" });
  }

  // 3️⃣ Read file safely
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error reading blog file" });
    }

    try {
      const blogData = JSON.parse(data);
      res.status(200).json(blogData);
    } catch (parseErr) {
      console.error(parseErr);
      res.status(500).json({ error: "Error parsing blog file" });
    }
  });
}
