import categoriesModel from "../../DB/models/categories";

export const fetchCategories = async () => {
    return await categoriesModel.findAll();
};