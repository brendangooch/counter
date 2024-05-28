/**
 * 
 */



export default class Counter {

    private static DEFAULT_START: number = 1;
    private static DEFAULT_END: number = 100000;
    private static DEFAULT_STEP: number = 1;

    private current: number;
    private start: number;
    private end: number;
    private step: number;

    public constructor(start?: number, end?: number, step?: number) {
        if (start !== undefined) this.start = start;
        else this.start = Counter.DEFAULT_START;
        if (end !== undefined) this.end = end;
        else this.end = Counter.DEFAULT_END;
        if (step !== undefined) this.step = step;
        else this.step = Counter.DEFAULT_STEP;
        this.current = this.start;
        if (this.start === this.end) throw new Error('min number cannot equal max number');
        if (this.step < 0) throw new Error('the step param must be a positive number');
    }

    public get count(): number {
        return this.current;
    }

    public tick(): void {
        if (this.start < this.end) this.increment();
        else this.decrement();
    }

    public restart(): void {
        this.current = this.start;
    }

    private increment(): void {
        this.current += this.step;
        if (this.current > this.end) this.restart();
    }

    private decrement(): void {
        this.current -= this.step;
        if (this.current < this.end) this.restart();
    }


}