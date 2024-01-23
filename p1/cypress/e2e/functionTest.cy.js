import {
  addNumbers,
  truthyFalsy,
  whereDoesCharAppearInString,
  whatIsTheType,
  combinedLengthOfTwoWords,
  divideRoundUp,
  divideRoundDown,
  biggestOfThree,
  smallestOfThree,
  rollCall,
  outputDateEcma262,
  makeFruitArray,
  makeFruitArrayTest,
  makeVegetableArray,
  makeVegetableArrayTest,
  makeRobotObject,
  makeRobotObjectTest,
  makeRobotObjectCamelCase,
  makeRobotObjectCamelCaseTest,
  makeFruitVegetableObject,
  makeFruitVegetableObjectTest,} from '../../js/script'


// Tests a single function
describe('function tests', () => {
  // An array of test scenarios to send to the function.
  const iterations =
    [
      {
        func: rollCall,
        testRuns: [
          {
            params: ['ben', 2],
            shouldReturn: "Hi, my name is ben. I'm enrolled in 2 classes",
          },
          {
            params:['cool cat', 1],
            shouldReturn: "Hi, my name is cool cat. I'm enrolled in 1 class",
          }
        ],
      },
      {
        func: truthyFalsy,
        testRuns: [
          {
            params: [0],
            shouldReturn: 'falsy',
          },
          {
            params: [1],
            shouldReturn: 'truthy',
          },
          {
            params: ['0'],
            shouldReturn: 'truthy',
          },
          {
            params: ['1'],
            shouldReturn: 'truthy',
          },
          {
            params: [''],
            shouldReturn: 'falsy',
          },
          {
            params: [' '],
            shouldReturn: 'truthy',
          },
          {
            params: [5 + 5],
            shouldReturn: 'truthy',
          },
        ]
      },
      {
        func: whatIsTheType,
        testRuns: [
          {
            params: [23423],
            shouldReturn: 'The type is number',
          },
          {
            params: [0],
            shouldReturn: 'The type is number',
          },
          {
            params: ['HELLO!'],
            shouldReturn: 'The type is string',
          },
          {
            params: [2.5],
            shouldReturn: 'The type is number',
          },
          {
            params: [{objectKey: 'objectValue'}],
            shouldReturn: 'The type is object',
          },
          {
            params: [['one', 'two', 'three']],
            shouldReturn: 'The type is object',
          },
          {
            params: [new Date()],
            shouldReturn: 'The type is object',
          },
          {
            params: [true],
            shouldReturn: 'The type is boolean',
          },
          {
            params: [false],
            shouldReturn: 'The type is boolean',
          },
          {
            params: [document.querySelector('#i-do-not-exist')],
            shouldReturn: 'The type is object',
          },
          {
            params: [document.querySelector('h1')],
            shouldReturn: 'The type is object',
          },
        ]
      },
      {
        func: addNumbers,
        testRuns: [
          {
            params: [1, 10],
            shouldReturn: 11,
          },
          {
            params: [-1, 1],
            shouldReturn: 0,
          },
          {
            params: [-20, -5],
            shouldReturn: -25,
          },
          {
            params: [-5, 20],
            shouldReturn: 15,
          }
        ]
      },
      {
        func: whereDoesCharAppearInString,
        testRuns: [
          {
            params: ['', ''],
            shouldReturn: 0,
          },
          {
            params: ["", 'car'],
            shouldReturn: 0,
          },
          {
            params: ['1', '123'],
            shouldReturn: 0,
          },
          {
            params: ['r', 'car'],
            shouldReturn: 2,
          },
          {
            params: ['e', 'beef'],
            shouldReturn: 1,
          },
          {
            params: ['z', 'dog'],
            shouldReturn: 'Character z is not in the string',
          },
        ]
      },
      {
        func: combinedLengthOfTwoWords,
        testRuns: [
          {
            params: ['', ''],
            shouldReturn: 0,
          },
          {
            params: ['', '1'],
            shouldReturn: 1,
          },
          {
            params: ['1', '1'],
            shouldReturn: 2,
          },
          {
            params: ['123', '1234'],
            shouldReturn: 7,
          },
        ]
      },
      {
        func: divideRoundUp,
        testRuns: [
          {
            params: [1, 2],
            shouldReturn: 1,
          },
          {
            params: [2, 1],
            shouldReturn: 2
          },
          {
            params: [5, 4],
            shouldReturn: 2
          },
          {
            params: [0, 1],
            shouldReturn: 0
          },
          {
            params: [-1, 3],
            shouldReturn: 0
          },
          {
            params: [-20, 5],
            shouldReturn: -4
          },
          {
            params: [30, 3],
            shouldReturn: 10
          },
          {
            params: [15, 5],
            shouldReturn: 3
          },
          {
            params: [-2, 1],
            shouldReturn: -2
          },
        ]
      },
      {
        func: divideRoundDown,
        testRuns: [
          {
            params: [1, 2],
            shouldReturn: 0,
          },
          {
            params: [2, 1],
            shouldReturn: 2
          },
          {
            params: [5, 4],
            shouldReturn: 1
          },
          {
            params: [0, 1],
            shouldReturn: 0
          },
          {
            params: [-1, 3],
            shouldReturn: -1
          },
          {
            params: [-20, 5],
            shouldReturn: -4
          },
          {
            params: [30, 3],
            shouldReturn: 10
          },
          {
            params: [15, 5],
            shouldReturn: 3
          },
          {
            params: [-2, 1],
            shouldReturn: -2
          },
        ]
      },
      {
        func: biggestOfThree,
        testRuns: [
          {
            params: [0, 0, 0],
            shouldReturn: 0
          },
          {
            params: [-2, -1, 0],
            shouldReturn: 0
          },
          {
            params: [1, 1, 2],
            shouldReturn: 2
          },
          {
            params: [100, -100, -110],
            shouldReturn: 100
          },
          {
            params: [1.5, 1, .5],
            shouldReturn: 1.5
          },
          {
            params: [5, 5, 5],
            shouldReturn: 5
          },
          {
            params: [-10, -10, -10],
            shouldReturn: -10
          },
        ]
      },
      {
        func: smallestOfThree,
        testRuns: [
          {
            params: [0, 0, 0],
            shouldReturn: 0
          },
          {
            params: [-2, -1, 0],
            shouldReturn: -2
          },
          {
            params: [1, 1, 2],
            shouldReturn: 1
          },
          {
            params: [100, -100, -110],
            shouldReturn: -110
          },
          {
            params: [1.5, 1, .5],
            shouldReturn: .5
          },
          {
            params: [5, 5, 5],
            shouldReturn: 5
          },
          {
            params: [-10, -10, -10],
            shouldReturn: -10
          },
          {
            params: [-2, -2, 1],
            shouldReturn: -2
          },
        ]
      },
      {
        func: outputDateEcma262,
        testRuns: [
          {
            params: ["11/10/2000"],
            shouldReturn: new Date("11/10/2000")
          },
          {
            params: ["11/10/2025"],
            shouldReturn: new Date('11/10/2025')
          },
          {
            params: ['01/30/2025'],
            shouldReturn: new Date('01/30/2025')
          },
          {
            params: ["12/31/2025"],
            shouldReturn: new Date('12/31/2025')
          },
          {
            params: ['02/28/2025'],
            shouldReturn: new Date('02/28/2025')
          },
          {
            params: ['02/29/2025'],
            shouldReturn: new Date('02/29/2025')
          },
          {
            params: ['02/29/2024'],
            shouldReturn: new Date('02/29/2024')
          },
          {
            params: ['02/29/1990'],
            shouldReturn: new Date('02/29/1990')
          },
          {
            params: ['02/29/1992'],
            shouldReturn: new Date('02/29/1992')
          },
          {
            params: ['08/08/2000'],
            shouldReturn: new Date('08/08/2000')
          },
          {
            params: ['02-29-2024'],
            shouldReturn: new Date('02-29-2024')
          },
          {
            params: ['02-29-1990'],
            shouldReturn: new Date('02-29-1990')
          },
          {
            params: ['02-29-1992'],
            shouldReturn: new Date('02-29-1992')
          },
          {
            params: ['08-08-2000'],
            shouldReturn: new Date('08-08-2000')
          },
        ]
      },
      {
        func: makeFruitArray,
        testRuns: [
          {
            params: [],
            shouldReturn: makeFruitArrayTest()
          }
        ]
      },
      {
        func: makeVegetableArray,
        testRuns: [
          {
            params: [],
            shouldReturn: makeVegetableArrayTest()
          }
        ]
      },
      {
        func: makeRobotObject,
        testRuns: [
          {
            params: [],
            shouldReturn: makeRobotObjectTest()
          }
        ]
      },
      {
        func: makeRobotObjectCamelCase,
        testRuns: [
          {
            params: [],
            shouldReturn: makeRobotObjectCamelCaseTest()
          }
        ]
      },
      {
        func: makeFruitVegetableObject,
        testRuns: [
          {
            params: [],
            shouldReturn: makeFruitVegetableObjectTest()
          }
        ]
      }
    ];


  for (const iteration of iterations) {
    const { func } = iteration;
    for (const call of iteration.testRuns) {
      it(`Function ${func.name} Params: ${call.params} Expect ${call.shouldReturn}`, () => {
        if (['outputDateEcma262','getOneWeekAgo'].includes(func.name)) {
          expect(String(func(...call.params))).to.equal(String(call.shouldReturn))
        } else if (['makeFruitArray', 'makeVegetableArray', 'makeRobotObject', 'makeRobotObjectCamelCase', 'makeFruitVegetableObject'].includes(func.name)) {
          expect(JSON.stringify(func(...call.params))).to.equal(JSON.stringify(call.shouldReturn))
        }
        else {
          expect(func(...call.params)).to.equal(call.shouldReturn)
        }
      })
    }
  }
})
