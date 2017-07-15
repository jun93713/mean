/**
 * Created by jun on 7/13/17.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email can not be blank'],
        unique: [true, 'Email address has been used'],
        validate: {
            validator: function( value ) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test( value );
            },
            message: "Please enter the correct format of email address"
        }
    },
    name: {
        first: {
            type: String,
            required: [true, "Firstname can not be blank"],
            trim: true,
            minlength: 2,
        },
        last: {
            type: String,
            required: [true, "Lastname can not be blank"],
            trim: true,
            minlength: 2,
        },
    },
    password: {
        type: String,
        required: [true, "password can not be blank"],
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character, and the length between 8 and 32"
        }
    },
    birthday: {type: Date, required: [true, "birthday can not be blank"]}
}, {timestamps: true});


UserSchema.pre("save", true, function(next, done) {
    var self = this;
    mongoose.models["User"].findOne({email: self.email}, function(err, user) {
        if(err) {
            done(err);
        } else if(user) {
            self.invalidate("email", "email must be unique");
            done(new Error("email must be unique"));
        } else {
            done();
        }
    });
    next();
});

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.genSalt(8, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });

});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    console.log("IS this not running");
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model('User', UserSchema);
mongoose.Promise = global.Promise;

// var hashedpw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));