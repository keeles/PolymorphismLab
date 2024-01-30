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
        let placeHolderPos = leftPos;
        leftPos = rightPos
        rightPos = leftPos
    };

    compare(leftPos: number, rightPos: number): boolean {
        return leftPos > rightPos
    };
}  