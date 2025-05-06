/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */

import { AbstractProductA } from './IAbstractProductA';

export class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}