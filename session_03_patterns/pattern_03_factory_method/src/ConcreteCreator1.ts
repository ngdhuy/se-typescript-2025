/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
import { Creator } from './Creator';
import { Product } from './IProduct';
import { ConcreteProduct1 } from './ConcreteProduct1';

export class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}