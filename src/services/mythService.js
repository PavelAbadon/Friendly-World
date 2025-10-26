import Myth from "../models/Myth.js";

function getAll (){
    return Myth.find();
}

function create(mythData, userId) {
    return Myth.create({
        ...mythData,
        owner: userId,
    });
}

function getLatestThree (){
    return Myth.find().sort({_id: -1}).limit(3);
}

export const mythService = {
    getLatestThree, create, getAll
};