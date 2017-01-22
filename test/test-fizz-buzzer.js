const fizzBuzzer = require('../fizzBuzzer');

require('chai').should();

describe('fizzBuzzer', function(){
	it('should return the word fizz-buzz '
		+'given an integer value divisible by 15', function(){
			const values = [15, 30, 45, 60];
			values.forEach(function(value){
				const answer = fizzBuzzer(value);
				answer.should.equal('fizz-buzz');
			});
		});

	it('should return the word buzz '
		+'given an integer value divisible by 5', function(){
			const values = [5, 10, 20, 25];
			values.forEach(function(value){
				const answer = fizzBuzzer(value);
				answer.should.equal('buzz');
			});
		});

	it('should return the word fizz '
		 +'given an integer value divisible by 3', function(){
			const values = [3, 6, 9, 12];
			values.forEach(function(value){
				const answer = fizzBuzzer(value);
				answer.should.equal('fizz');
			});
		});

	it('should return the number '
		+'given an integer not divisible by 3, 5, or 15', function(){
			const values = [1, 2, 7, 11];
			values.forEach(function(value){
				const answer = fizzBuzzer(value);
				answer.should.equal(value);
			});
		});

	it('should throw an error when '
		+'given a non-numerical value', function(){
			const values = ['a', '!', {name: 'tom'}, [1, 2, 3]];
			values.forEach(function(value){
				(function(){
					fizzBuzzer(value);
				}).should.throw(Error);
			});
		});

});