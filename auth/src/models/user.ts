import mongoose, { mongo } from "mongoose";
import { userAttr } from "../interfaces/userAttributes";
import { UserDoc } from "../interfaces/userDoc";
import { UserModel } from "../interfaces/userModel";

const userSchema = new mongoose.Schema({
    user: { type: String, required: true },
    email: { type: String, required: true }
});

userSchema.statics.build = (attr: userAttr) => {
    return new User(attr);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export{ User };