const { appData } = require('../middleware/dataSource');

const insertData = async(data) => {
    return await appData.query(
        `
        INSERT INTO test (
            data
        ) VALUES (?)
        `, [data]
    );
}

const selectData = async() => {
    const data = await appData.query(
        `
        SELECT
            *
        FROM test
        ORDER BY rand()
        LIMIT 1
        `
    );
    return data;
}

const updateData = async(id, data) => {
    return await appData.query(
        `
        UPDATE test SET data = ? WHERE id = ?;
        `, [data, id]
    )
} 

const deleteAllData = async() => {
    return await appData.query(
        `
        DELETE FROM test;
        `
    )
}

module.exports = {
    insertData,
    selectData,
    updateData,
    deleteAllData
}