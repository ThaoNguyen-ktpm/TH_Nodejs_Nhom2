import express from "express"
import pool from '../configs/connect.js'
import userModel from '../services/userModel.js'
const getLoginUser = (req, res) => {
    return res.render("index", {data: { title: 'Đăng Nhập', page: 'loginUser'}})

}


const postLoginUser = async (req, res) =>{
    let account = req.body.account    
    let password =req.body.password

    let [results , fields] =  await pool.query( 
        `SELECT * FROM user WHERE account = ? AND password = ?`,[ account, password] )
 
        if (results.length > 0) {
          // Đăng nhập thành công, lưu thông tin vào session
          req.session.loggedin = true;
          req.session.account = account;
    
          res.redirect('/'); // Chuyển hướng đến trang dashboard
          // console.log(req.session.account);
        } else {
          // Đăng nhập không thành công, hiển thị lỗi hoặc thông báo
          req.flash( 'Đăng Nhập Không Thành Công');
          res.redirect('/login',); // Chuyển hướng đến trang dashboard
        }
}

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) res.redirect('/');
  });
};

export default { getLoginUser , postLoginUser, logout}