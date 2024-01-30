import { ISortable } from "./sortable";

export class NumberGroup implements ISortable {
    private _data!: number[];

    constructor(data: number[]) {
        this._data = data
    }

    get length(): number {
        return this._data.length
    };

    swap(leftPos: number, rightPos: number): void {
        if (!leftPos || !rightPos) {
            throw new Error("Error: Index out of bounds")
        }
        let placeHolderPos = leftPos;
        leftPos = rightPos
        rightPos = placeHolderPos
    };

    compare(leftPos: number, rightPos: number): boolean {
        if (!leftPos || !rightPos) {
            throw new Error("Error: Index out of bounds")
        }
        return leftPos > rightPos
    };
}  