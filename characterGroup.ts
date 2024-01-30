import { ISortable } from "./sortable";

export class CharacterGroup implements ISortable {
    private _data!: string;

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