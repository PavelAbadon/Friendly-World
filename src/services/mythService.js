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

export const mythService = {
    create, getAll
};