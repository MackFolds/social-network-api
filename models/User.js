const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Username is required',
            unique: true,
            trim: true        
        },
        email: {
            type: String,
            required: 'Email is required',
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [this]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }    
)

UserSchema 
    .virtual('friendCount')
    .get(function() {
        return this.friends.length
    });

const User = model('User', UserSchema);

module.exports = User;