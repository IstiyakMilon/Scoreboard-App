const Stopwatch = require("./Stopwatch")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Stopwatch.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentWillUnmount", () => {
    let inst

    beforeEach(() => {
        inst = new Stopwatch.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillUnmount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
