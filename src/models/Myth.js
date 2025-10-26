import { Schema, Types, model } from "mongoose";

const mythSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name is too short!'],
    },
    origin: {
        type: String,
        required: [true, 'Origin is required'],
        minLength: [3, 'Origin is too short!'],
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        minLength: [2, 'Role is too short!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required'],
        match: [/^https?:\/\//, 'Image URL is invalid!'],
    },
    symbol: {
        type: String,
        required: [true, 'Symbol is required'],
        minLength: [3, 'Symbol is too short!'],
        maxLength: [40, 'Symbol is too long!'],
    },
    era: {
        type: String,
        required: [true, 'Era is required'],
        minLength: [5, 'Era is too short!'],
        maxLength: [15, 'Era is too long!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description is too short!'],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Myth = model('Myth', mythSchema);

export default Myth;
