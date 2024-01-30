import { ISortable } from "./sortable";

export class CharacterGroup implements ISortable {
    private _data!: string;

    get data(): string[] {
        return this._data.split("")
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