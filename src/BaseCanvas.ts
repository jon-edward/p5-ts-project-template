import P5 from "p5"

export default abstract class BaseCanvas {
    p5: P5

    constructor(_p5: P5) {
        this.p5 = _p5;
        
        // setup and draw are called within an arrow
        // function to preserve "this"
        
        _p5.setup = () => this.setup()
        _p5.draw = () => this.draw()
    }

    abstract setup() : void
    abstract draw() : void
}
