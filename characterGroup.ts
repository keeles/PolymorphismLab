import { ISortable } from "./sortable";

export class CharacterGroup implements ISortable {
    private _data!: string;

    constructor(string: string) {
        this._data = string;
    }

    get data(): string {
        return this._data
    }

    get length(): number {
        return this._data.length
    };

    swap(leftPos: number, rightPos: number): void {
        let data = this._data.split("")
        let tempLeft = data[leftPos]
        data[leftPos] = data[rightPos]
        data[rightPos] = tempLeft
        this._data = data.join("")
    };

    compare(leftPos: number, rightPos: number): boolean {
        let data = this._data.split("")
        return (data[leftPos].localeCompare(data[rightPos]) > 0)
    };
}