// import * as fs from 'fs';

// export default async function handler(req, res) {
//   if(req.method === 'POST'){
//      let data = await fs.promises.readdir('contactdata')
//     fs.promises.writeFile(`contactdata${data.length+1}.json`,JSON.stringify(req.body))
//     res.status(200).json(req)
//   }
//   else{
//      res.status(200).json(['allblogs'])
//   }
   
// }

import * as fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Folder ka naam
      const folder = 'contactdata';

      // Agar folder exist nahi karta to bana lo
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
      }

      // Folder ke andar kitni files hain wo count karo
      const files = await fs.promises.readdir(folder);

      // Naya file name create karo (1.json, 2.json, ...)
      const fileName = `${files.length + 1}.json`;

      // File likho
      await fs.promises.writeFile(
        `${folder}/${fileName}`,
        JSON.stringify(req.body, null, 2)  // 2-space indentation for readability
      );

      res.status(200).json({ success: true, message: `File ${fileName} created!` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Failed to save data!' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed!' });
  }
}

