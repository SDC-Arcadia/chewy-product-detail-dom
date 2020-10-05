const db = require('../../database/dbConnection');

module.exports.addProductInfo = async (req, res) => {

}

module.exports.updateProductInfo = async (req, res) => {
  const { productId } = req.params;
  const updatedDocument = req.body;

  try {
    const result = await db.replace(productId, updatedDocument);
    console.log('UPDATE SUCCESSFUL:', result);
    res.status(200).send(result);
  } catch (error) {
    console.log('ERROR UPDATING RECORD:', error);
    res.status(400).send(error);
  }
};

module.exports.deleteProductInfo = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await db.remove(productId);
    console.log('DELETE SUCCESSFUL:', result);
    res.status(200).send(result);
  } catch (error) {
    console.log('ERROR DELETING RECORD:', error);
    res.status(400).send(error);
  }
};
