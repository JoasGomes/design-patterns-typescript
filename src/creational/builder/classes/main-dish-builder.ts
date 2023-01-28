import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('arroz', 5);
    const beans = new Beans('feijão', 7);
    const meat = new Meat('carne', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beaverage = new Beverage('bebida', 20);
    this._meal.add(beaverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('sobremesa', 20);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
