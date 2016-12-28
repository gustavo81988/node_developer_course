const expect = require('expect');
const utils  = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
});

it('should square a number' , () => {
    let res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('it should set firstName and lastName' , () => {
    let user = { location: 'Philadelphia',age: 25 };
    let res  = utils.setName(user,`Gustavo Ramirez`);

    expect(res).toInclude({
        firstName: 'Gustavo',
        lastName : 'Ramirez'
    });   
});

/*
it('should expect some values', () => {
    expect(12).toNotBe(12);
    expect({name:'Andrew'}).toEqual({name:'Andrew'});
    expect([2,3,4]).toExclude(1);
    expect({
        name: 'Andrew',
        age : 25,
        location: 'Philadelphia'
    }).toInclude({
        age: 25
    });
});
*/

