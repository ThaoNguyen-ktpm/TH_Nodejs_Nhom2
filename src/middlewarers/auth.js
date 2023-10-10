exports.loggedin = (req , res , next) => {
    if (req.session.loggedin) {
        res.locals.user = req.session.account
        next();
    }else {
        res.redirect('/login')
    }
};

exports.isAuth = (req , res , next) => {
    if (req.session.loggedin) {
        res.locals.account = req.session.account
        res.redirect('/')
    }else {
        next();
    }
};