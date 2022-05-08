import mongoose from "mongoose";
import { userAttr } from "./userAttributes";
import { UserDoc } from "./userDoc";


export interface UserModel extends mongoose.Model<UserDoc> {
    build(att: userAttr): UserDoc;
}