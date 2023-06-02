const {insertData, selectData, updateData, deleteAllData} = require('../service/data.service');

const postData = async (req, res) => {
    const {data} = req.body;
    await insertData(data);
    return res.status(201).json({message: "Success"});
}

const getData = async (req, res) => {
    const [data] = await selectData();
    return res.status(200).json({data})
}

const patchData = async (req, res) => {
    const {data} = req.body;
    const selectResult = await selectData();
    await updateData(selectResult[0].Id, data);
    return res.status(201).json({message : "Success"});
}

const deleteData = async (req, res) => {
    await deleteAllData();
    return res.status(204).json({message: "Delete"});
}

module.exports = {
    postData,
    getData,
    patchData,
    deleteData
}