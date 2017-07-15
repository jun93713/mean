/**
 * Created by jun on 7/13/17.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');




module.exports = {
    create: function (req, res) {
        if (req.body.password != req.body.confirm_password){
            res.render('index', {errors: [{message: 'Password does not match password confirm'}]})
        }
        else {
            var user = new User({
                email: req.body.email,
                name:{
                    first: req.body.firstname,
                    last: req.body.lastname,
                },
                password: req.body.password,
                birthday: req.body.birthday
            });
            // console.log(bcrypt.compareSync(req.body.password, user.password));
            user.save(function (err) {
                if(err){
                    console.log(err);
                    res.render('index', {errors: user.errors})
                }
                else {
                    res.redirect('/')
                }
            });
        }
    },
    showall: function (req, res) {
        User.find().exec(function (err, users) {
            if (err){
                console.log("error!!!!!", err)
            }
            else {
                res.render('users', {users: users});
            }
        })
    },
    login: function (req, res) {
        User.findOne({email: req.body.email}).exec(function (err, user) {
            if (err){ console.log("error!!!!!", err) }
            else {
                if(user){
                    return user.comparePassword(req.body.password, function (err, isMatch) {
                        if (err){ console.log("error!!!!!", err) }
                        else {
                            if(isMatch){
                                return res.redirect('/users')
                            }
                            else {
                                return res.render('index', {errors: [{message: 'Invalid email or password'}]})
                            }
                        }
                    })
                }
                else {
                    res.render('index', {errors: [{message: 'Invalid email or password'}]})

                }
            }
        })
    }
}