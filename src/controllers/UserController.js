import express from "express";
import userModel from "../services/userModel.js"

const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser();
    return res.render("index", { data: { title: 'Danh sách tài khoản', rows: userList , page: 'listUser'} })
}

export default { getAllUser }
