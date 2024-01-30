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
        if (!this._data[leftPos] || !this._data[rightPos]) {
            throw new Error("Error: Index out of bounds")
        }
        let placeHolderPos = this._data[leftPos]
        this._data[leftPos] = this._data[rightPos]
        this._data[rightPos] = placeHolderPos
    };

    compare(leftPos: number, rightPos: number): boolean {
        if (!this._data[leftPos] || !this._data[rightPos]) {
            throw new Error("Error: Index out of bounds")
        }
        return this._data[leftPos] > this._data[rightPos]
    };
}  