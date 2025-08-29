import { CocktailModel } from "../models/CocktailModel";

export const MenuController = {
  getMenu() {

    return CocktailModel.getAll();
  }
};
