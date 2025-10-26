import { Schema, Types, model } from "mongoose";

const mythShema = new Schema({
    name:{
        type: String,
        required:[true, 'Name is required']
    },
    origin:{
        type: String,
        required:[true, 'Origin is required']
    },
    role:{
        type: String,
        required:[true, 'Role is required']
    },
    imageUrl:{
        type: String,
        required:[true, 'Image is required']
    },
    symbol:{
        type: String,
        required:[true, 'Symbol is required']
    },
    era:{
        type: String,
        required:[true, 'Era is required']
    },
    description:{
        type: String,
        required:[true, 'Description is required']
    },
    owner:{
        type: Types.ObjectId,
        ref: 'User'
    },
});

const Myth = model('Myth', mythShema);

export default Myth;