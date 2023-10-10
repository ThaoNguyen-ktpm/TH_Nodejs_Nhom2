import express from "express"

const handleNotFound = (req, res) => {
    res.status(404).send('Lỗi 404, không tìm thấy trang rồi á');
  };
  
  export default  handleNotFound  ;