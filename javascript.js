// const person = {
// 	name: 'Harry',
// 	secondname: 'Potter',
// 	age: 25,
// 	['key_'+ (1 + 3)]: 'chto-to',
// 	keys() {
// 		console.log('keys from person')
// 	},
// 	info() {
// 		console.info('Info about human, his name:', this.name)
// 	}
// }

// console.log(person.keys())
// console.log(person.name)
// console.log(person.secondname)
// console.log(['key_'+ (1 + 3)])

// const {name, secondname} = person

// console.log(name, secondname)


// for (let key in person){
	// console.log(key, ': ', person[key])
// }
// const keys = Object.keys(person).forEach((key) => {console.log('key:', key)})
// console.log(keys)

// person.info()

// const logger = {
// 	keys() {
// 		console.log('Object keys:', Object.keys(this))
// 	},

// 	keysAndVlues(){
// 		Object.keys(this).forEach((key) => {console.log(`${key}: ${this[key]}`)})
// 	},

// 	withParams(top = false, between = false, bottom = false){
// 		if (top) {
// 			console.log('-------Start--------')
// 		}
// 		Object.keys(this).forEach((key, index, array) => {
// 			console.log(`${key}: ${this[key]}`)
// 			if (between && index != array.length - 1){
// 				console.log('--------------------')
// 			}
// 		})
// 		if (bottom){
// 			console.log('--------End---------')
// 		}

// 	}
// }

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.bind(person)()

// logger.keys.call(person)

// logger.keysAndVlues.call(person)

// logger.withParams.call(person, true, true, true)


// setTimeout(() => {
// 	console.log('setTimeout')
// }, 1000)

// const interval = setInterval(() => {
// 	console.log('setInterval')
// }, 1000)

// clearInterval(interval)

// const delay = (wait = 1000) => {
// 	new Promise(( => {
// 		   setTimeout(() => {

// 		}, wait)	
// 	}))
	
// }


const head = document.querySelectorAll('h2')
const heading = head[head.length - 1]
console.log(heading)