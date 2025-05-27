//functionalities for managing text data
const Text = require("../models/text");

//list all texts
exports.getAllTexts = async (req, res) => {
  try {
    const texts = await Text.find();
    res.status(200).json(texts);
  } catch (error) {
    res.status(500).json({ error: "hata var" });
  }
};
// find one text with id
exports.getTextById = async (req, res) => {
    try {
        const { id } = req.params;
        const text = await Text.findById(id);
        if (!text) {
            return res.status(404).json({ error: "Text bulunamadı" });
        }
        res.status(200).json(text);

    }
    catch (error) {
        console.error("beklenmedik hata", error);
        return res.status(500).json({ error: "Hata oluştu" });
    }
}

// Add new text
exports.addText = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text yok" });
    }
    const newText = new Text({ text });
    await newText.save();
    return res.status(201).json(newText);
  } catch (error) {
    console.error("beklenmedik hata", error);
    return res.status(500).json({ error: "Hata oluştu" });
  }
};

// Update text by id
exports.updateText = async (req, res) => {
    try {
        const {id} = req.params;
        const {text} = req.body;
        const updatedText = await Text.findByIdAndUpdate(id,{text}, {new: true});
        return res.status(200).json(updatedText);

    } catch (error) {
        console.error("beklenmedik hata", error);
        return res.status(500).json({ error: "Hata oluştu" });
    }

}

// Delete text by id
exports.deleteText = async (req,res)=>{
    try {
        const {id} = req.params;
        await Text.findByIdAndDelete(id);
        return res.status(200).json({message: "Text silindi"});
    } catch (error) {
        console.log("beklenmedik hata",error)
        res.status(500).json({error: "Hata oluştu"});
    }
}