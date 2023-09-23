import pool from '../configs/connect.js'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return rows
}

export default { getAllUser }

// const detailUser = async (username) =>{
//     const [rows] = await pool.execute('SELECT * FROM `user` WHERE username=?',[username])
//     return rows[0]
// }