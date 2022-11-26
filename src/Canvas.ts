import BaseCanvas from "./BaseCanvas";

export default class Canvas extends BaseCanvas {
    
    setup() {
        this.p5.createCanvas(100, 100)
        this.p5.fill(0)
    }
    
    draw() {
        this.p5.background(255)
        this.p5.circle(50, 50, 10)
    }
}
