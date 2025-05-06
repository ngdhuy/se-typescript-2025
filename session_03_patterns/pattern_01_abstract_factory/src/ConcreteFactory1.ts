/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
import { AbstractFactory } from './IAbstractFactory';
import { AbstractProductA } from './IAbstractProductA';
import { AbstractProductB } from './IAbstractProductB';
import { ConcreteProductA1 } from './ConcreteProductA1';
import { ConcreteProductB1 } from './ConcreteProductB1';

export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}