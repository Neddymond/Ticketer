import mongoose, { mongo } from "mongoose";
import { userAttr } from "../interfaces/userAttributes";
import { UserDoc } from "../interfaces/userDoc";
import { UserModel } from "../interfaces/userModel";
import { Password } from "../services/password";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id,
            delete ret._id,
            delete ret.password,
            delete ret.__v
        }
    }
});

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    
    done();
})

userSchema.statics.build = (attr: userAttr) => {
    return new User(attr);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export{ User };