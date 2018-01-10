namespace SingletonPattern {
	// https://basarat.gitbooks.io/typescript/docs/tips/singleton.html
	class Singleton {
		private static instance: Singleton;
		private constructor() {
			// do something construct...
		}
		static getInstance() {
			if (!Singleton.instance) {
				Singleton.instance = new Singleton();
				// ... any one time initialization goes here ...
			}
			return Singleton.instance;
		}
		someMethod() { 
			console.log(`class`);
		}
	}
	
	// let something = new Singleton() // Error: constructor of 'Singleton' is private.
	// how to use
	var singleton1 = Singleton.getInstance();
	var singleton2 = Singleton.getInstance();
	console.log(singleton1 === singleton2);

	/* However if you don't want lazy initialization you can instead just use a namespace */
	namespace Singleton {
		export function someMethod() {
			this.getInstance().someMethod()
			console.log(`namespace`);
		}
	}
	// Usage
	Singleton.someMethod();


	// https://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript
	// http://www.codebelt.com/typescript/typescript-singleton-pattern/
	class SingletonClass {
		private static _instance:SingletonClass = new SingletonClass();
		private _score:number = 0;
	
		constructor() { //区别，没有设为 private 
			if(SingletonClass._instance){
				return SingletonClass._instance;
			}
		}

		public static getInstance():SingletonClass {
			return SingletonClass._instance;
		}
	
		public setScore(value:number):void {
			this._score = value;
		}
	
		public getScore():number {
			return this._score;
		}
	
		public addPoints(value:number):void {
			this._score += value;
		}
	
		public removePoints(value:number):void {
			this._score -= value;
		}
	}
	// two ways
	var sing1:SingletonClass = new SingletonClass();
	var sing2:SingletonClass = new SingletonClass();
	var sing3:SingletonClass = SingletonClass.getInstance();
	var sing4:SingletonClass = SingletonClass.getInstance();
	console.log(sing1 === sing2, sing2 === sing3, sing3 === sing4);

}