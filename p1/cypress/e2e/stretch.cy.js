import {
    makeLeet,
    teamRoster,
    getEarliestDate,
    getLastDayOfTheMonth,
    getOneWeekAgo,
    getEarliestDateTest,
    getLastDayOfTheMonthTest,
    getOneWeekAgoTest,
} from '../../js/script'

// Tests a single function
describe('function tests', () => {
    const now = new Date()
    const d1 = new Date('12/11/2022')
    const d2 = new Date('12/10/2022')
    const d3 = new Date('11/10/2022')
    const d4 = new Date('12/11/2023')
    const d5 = new Date('01/01/2001')
    const d6 = new Date('12/31/2000')
    const d7 = new Date('02/01/2001')
    const d8 = new Date('02/02/2002')
    const d9 = new Date('05/06/2006')
    const dd4 = new Date('06/05/2006')
    const dd5 = new Date('06/06/2006')
    const dd6 = new Date('06/05/2005')
    const dd7 = new Date('01/01/1900')
    const dd8 = new Date('10/10/2100')
    // An array of test scenarios to send to the function.
    const iterations =
        [
            {
                func: teamRoster,
                testRuns: [
                    {
                        params: ['Powersword', 'bear', 'sheep', 'lizard', 'wolf'],
                        shouldReturn: 'Team "Powersword" has members: bear, sheep, lizard, wolf.',
                    },
                    {
                        params: ['power rangers', 'blue', 'black', 'pink', 'yellow'],
                        shouldReturn: 'Team "power rangers" has members: blue, black, pink, yellow.'
                    }
                ]
            },
            {
                func: makeLeet,
                testRuns: [
                    {
                        params: ['leet'],
                        shouldReturn: '1337'
                    },
                    {
                        params: ['BeEtSabeR'],
                        shouldReturn: 'B3375ab3R'
                    },
                    {
                        params: ['John Wall'],
                        shouldReturn: 'John Wa11'
                    },
                    {
                        params: [''],
                        shouldReturn: ''
                    },
                    {
                        params: ['AcompLished WriTer'],
                        shouldReturn: 'Acomp1i5h3d Wri73r'
                    },
                    {
                        params: ['poNd'],
                        shouldReturn: 'poNd'
                    },
                ]
            },
            {
                func: getEarliestDate,
                test: getEarliestDateTest,
                testRuns: [
                    {
                        params: [d1, d2],
                        shouldReturn: d2
                    },
                    {
                        params: [d1, d3],
                        shouldReturn: d3
                    },
                    {
                        params: [d2, d3],
                        shouldReturn: d3
                    },
                    {
                        params: [d1, d4],
                        shouldReturn: d1
                    },
                    {
                        params: [d5, d6],
                        shouldReturn: d6
                    },
                    {
                        params: [d6, d7],
                        shouldReturn: d6
                    },
                    {
                        params: [d7, d8],
                        shouldReturn: d7
                    },
                    {
                        params: [d9, dd4],
                        shouldReturn: d9
                    },
                    {
                        params: [dd4, dd5],
                        shouldReturn: dd4
                    },
                    {
                        params: [dd4, dd6],
                        shouldReturn: dd6
                    },
                    {
                        params: [dd6, dd7],
                        shouldReturn: dd7
                    },
                    {
                        params: [d1, dd8],
                        shouldReturn: d1
                    },
                ]
            },
            {
                func: getLastDayOfTheMonth,
                test: getLastDayOfTheMonthTest,
                testRuns: [
                    {
                        params: ['12/11/2022'],
                        shouldReturn: new Date(d1.getFullYear(), d1.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['12/10/2022'],
                        shouldReturn: new Date(d2.getFullYear(), d2.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['11/10/2022'],
                        shouldReturn: new Date(d3.getFullYear(), d3.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['12/11/2023'],
                        shouldReturn: new Date(d4.getFullYear(), d4.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['01/01/2001'],
                        shouldReturn: new Date(d5.getFullYear(), d5.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['12/31/2000'],
                        shouldReturn: new Date(d6.getFullYear(), d6.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['02/01/2001'],
                        shouldReturn: new Date(d7.getFullYear(), d7.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['02/02/2002'],
                        shouldReturn: new Date(d8.getFullYear(), d8.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['05/06/2006'],
                        shouldReturn: new Date(d9.getFullYear(), d9.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['06/05/2006'],
                        shouldReturn: new Date(dd4.getFullYear(), dd4.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['06/06/2006'],
                        shouldReturn: new Date(dd5.getFullYear(), dd5.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['06/05/2005'],
                        shouldReturn: new Date(dd6.getFullYear(), dd6.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['01/01/1900'],
                        shouldReturn: new Date(dd7.getFullYear(), dd7.getMonth()+1, 0).getDate()
                    },
                    {
                        params: ['10/10/2100'],
                        shouldReturn: new Date(dd8.getFullYear(), dd8.getMonth()+1, 0).getDate()
                    },
                ]
            },
            {
                func: getOneWeekAgo,
                test: getOneWeekAgoTest,
                testRuns: [
                    {
                        params: [now],
                        shouldReturn: new Date(now.getFullYear(), now.getMonth(), now.getDate()- 7)
                    },
                    {
                        params: [d1],
                        shouldReturn: new Date(d1.getFullYear(), d1.getMonth(), d1.getDate()- 7)
                    },
                    {
                        params: [d2],
                        shouldReturn: new Date(d2.getFullYear(), d2.getMonth(), d2.getDate()- 7)
                    },
                    {
                        params: [d5],
                        shouldReturn: new Date(d5.getFullYear(), d5.getMonth(), d5.getDate()- 7)
                    },
                    {
                        params: [d6],
                        shouldReturn: new Date(d6.getFullYear(), d6.getMonth(), d6.getDate()- 7)
                    },
                    {
                        params: [d8],
                        shouldReturn: new Date(d8.getFullYear(), d8.getMonth(), d8.getDate()- 7)
                    },
                    {
                        params: [d9],
                        shouldReturn: new Date(d9.getFullYear(), d9.getMonth(), d9.getDate()- 7)
                    },
                    {
                        params: [dd4],
                        shouldReturn: new Date(dd4.getFullYear(), dd4.getMonth(), dd4.getDate()- 7)
                    },
                    {
                        params: [dd5],
                        shouldReturn: new Date(dd5.getFullYear(), dd5.getMonth(), dd5.getDate()- 7)
                    },
                    {
                        params: [dd7],
                        shouldReturn: new Date(dd7.getFullYear(), dd7.getMonth(), dd7.getDate()- 7)
                    },
                ]
            },
        ];


    for (const iteration of iterations) {
        const { func, test } = iteration;
        for (const call of iteration.testRuns) {
            it(`Function ${func.name} Params: ${call.params} Expect ${call.shouldReturn}`, () => {
                if (['getEarliestDate', 'getLastDayOfTheMonth', 'getOneWeekAgo'].includes(func.name)) {
                    expect(String(func(...call.params))).to.equal(String(test(...call.params)))
                } else {
                    expect(func(...call.params)).to.equal(call.shouldReturn)
                }
            })
        }
    }
})
