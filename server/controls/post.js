import createpost from "../models/postmessages.js";
export const getpost= async (req,res)=>{
    try {
        const crtpost= await createpost.find();
        res.status(200).json(crtpost);
    } catch (error) {
        res.status(404).json({messsage:error.message});
    }
};
export const postcreate= async (req,res)=>{
    const bodi= req.body;
        const newpost= postMessage();
    try {
        await newpost.save()
        res.status(201).json(newpost);
    } catch (error) {
      res.status(404).json({messsage:error.message});
    }
}
