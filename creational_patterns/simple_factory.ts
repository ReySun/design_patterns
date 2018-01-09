// https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/simple_factory.html
namespace simpleFactoryPattern {
  //抽象产品角色
  interface AbstractProduct {
    use() : void;
  }

  // 具体产品角色
  class ConcreteProductA implements AbstractProduct {
    use() {
      console.log('ConcreteProductA to use');
    }
  }
  class ConcreteProductB implements AbstractProduct {
    use() {
      console.log('ConcreteProductB to use');
    }
  }

  // 工厂角色
  class ProductFactory {
    static createProduct(type : string) : AbstractProduct {
      if(type == 'A') {
        return new ConcreteProductA();
      } else if (type == 'B') {
        return new ConcreteProductB();
      }
    }
  }

  // how to use
  console.log(ProductFactory);
  ProductFactory
    .createProduct("A")
    .use();
}