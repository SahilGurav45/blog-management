import * as fs from 'fs';

export default async function handler(req, res) {
  try {
    const files = await fs.promises.readdir("blogdata");
    let allBlogs = [];

    for (let i = 0; i < files.length; i++) {
      const fileContent = await fs.promises.readFile(`blogdata/${files[i]}`, "utf-8");
      allBlogs.push(JSON.parse(fileContent));
    }

    res.status(200).json(allBlogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error reading blog files" });
  }
}
