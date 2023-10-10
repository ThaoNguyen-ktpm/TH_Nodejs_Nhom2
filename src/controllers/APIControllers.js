 import pool from '../configs/connect.js'
let getAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return res.status(200).json({
        message : 'lấy ra được danh sách ',
        data: rows  
    })
}

let createNewUser = async (req, res) => {
    let hoten =req.body.hoten
    let account =req.body.account
    let gender =req.body.gender
    let email =req.body.email
    let address =req.body.address
    let groupid =req.body.groupid
    let password =req.body.password
    if ( !hoten|| !account|| !gender|| !email|| !address|| !groupid|| !password){
        return res.status(200).json({
            message : 'thất bại ',
            
        })
    }

    let [results , fields] =  await pool.query( 
        `INSERT INTO user
        (hoten,account,gender,email,address,groupid,password) 
        VALUES (?,?,?,?,?,?,?)`,
        [hoten,account,gender,email,address,groupid,password]
);
    
    return res.status(200).json({
        message : 'thành công ',
        
    })
}

let updateUser = async (req, res) => {
    let stt = req.body.stt    
    let hoten =req.body.hoten
    let account =req.body.account
    let gender =req.body.gender
    let email =req.body.email
    let address =req.body.address
    let groupid =req.body.groupid
    let password =req.body.password
    if ( !stt || !hoten|| !account|| !gender|| !email|| !address|| !groupid|| !password){
        return res.status(200).json({
            message : 'thất bại ',
            
        })
    }

    let [results , fields] =  await pool.query( 
        `UPDATE user
        SET hoten = ? ,account = ?,gender = ?,email = ?,address = ?,groupid = ?, password=?
        WHERE stt = ?`,
        [hoten, account, gender, email, address, groupid,password, stt]
    );
    
    return res.status(200).json({
        message : 'thành công ',
       
    })
}

let deleteUser = async (req, res) => {
    let stt = req.params.stt   
    if ( !stt ){
        return res.status(200).json({
            message : 'thất bại ',  
        })
    }
    let [results , fields] =  await pool.query( 
        `DELETE FROM user WHERE stt = ?`,
        [stt]);
    return res.status(200).json({
        message : 'thành công ',
     
    })
}

export default { getAllUser , createNewUser, updateUser , deleteUser }
 