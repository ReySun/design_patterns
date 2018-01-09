// https://design-patterns.readthedocs.io/zh_CN/latest/creational_patterns/factory_method.html
namespace FactoryMethodPattern {
	// 抽象产品
	interface AbstractLog {
		log();
	}

	// 具体产品
	class FileLog implements AbstractLog {
		log() {
			console.log('FileLog');
		}
	}
	class DatabaseLog implements AbstractLog {
		log() {
			console.log('DatabaseLog');
		}
	}

	// 抽象工厂
	interface AbstractLogFactory{
		createLog():AbstractLog
	}

	// 具体工厂
	class FileLogFactory implements AbstractLogFactory {
		createLog() :AbstractLog{
			this.beforeLog();
			return new FileLog();
		}
		private beforeLog(){
			console.log('beforeLog');
		}
	}
	class DatabaseLogFactory implements AbstractLogFactory {
		createLog() :AbstractLog{
			this.beforeLog();
			return new DatabaseLog();
		}
		private beforeLog(){
			console.log('beforeLog');
		}
	}

	// how to use
	(new FileLogFactory).createLog().log();
	(new DatabaseLogFactory).createLog().log();
}