import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtWithStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const CustomizedTshirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(
  tShirtWithStampFrontAndBack.getPrice(),
  tShirtWithStampFrontAndBack.getName(),
);
console.log(CustomizedTshirt.getPrice(), CustomizedTshirt.getName());
