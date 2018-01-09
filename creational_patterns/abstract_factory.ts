// https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/abstract_factory.html
namespace AbstractFactoryPattern {
  // 抽象产品
	interface AbstractCar {
		drive() : void;
	}
	interface AbstractPhone {
		IMEI: number;
	}

	// 具体产品
	class BMW implements AbstractCar {
		drive = () => {
			console.log('This is drive of BMW');
		}
	}
	class apple implements AbstractPhone {
		constructor(private num: number){ }
		get IMEI() {
			console.log(this.num);
			return this.num;
		}
	}
	class Benz implements AbstractCar {
		drive = () => {
			console.log('This is drive of Benz');
		}
	}
	class huawei implements AbstractPhone {
		constructor(private num: number){ }
		get IMEI() {
			console.log(this.num);
			return this.num;
		}
	}

	// 抽象工厂
	interface AbstractFactory {
		crcallePhone(num: number) : AbstractPhone;
		crcalleCar?() : AbstractCar; //使用'?'表示可有可无，增加系统灵活性
	}
	
	// 具体工厂
	class selfFactory implements AbstractFactory {
		crcalleCar() : AbstractCar {return new BMW();}
		crcallePhone(num: number) : AbstractPhone {return new apple(num);}
	}
	class thirdFactory implements AbstractFactory {
		crcallePhone(num: number) : AbstractPhone {return new huawei(num);}
	}

	// how to use
	new selfFactory().crcalleCar().drive();
	new selfFactory().crcallePhone(987654321).IMEI;
	new thirdFactory().crcallePhone(123456789).IMEI;
}