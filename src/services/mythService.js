import Myth from "../models/Myth.js";

function create(mythData, userId) {
    return Myth.create({
        ...mythData,
        owner: userId,
    });
}

export const mythService = {
    create,
};