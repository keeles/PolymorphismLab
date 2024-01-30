import { LinkedListGroup } from "./linkedList";
import { NumberGroup } from "./numberGroup";
import { ISortable } from "./sortable";

class SortUtil {
    collection: ISortable;

    constructor(collection: ISortable) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;
        let isSorted = false;
        let lastUnsorted = length - 1;
        while (!isSorted) {
            isSorted = true;
            for (let i = 0; i < lastUnsorted; i++) {
                // HANDLE LINKED LIST LOGIC HERE 
                if (this.collection instanceof LinkedListGroup) {
                    // HELP! -Sarah
                }

                // HANDLE LIST OF NUMBERS LOGIC HERE
                // I GOT IT TO WORK WITH ARRAY OF NUMBERS
                if (this.collection instanceof Array) {
                    if (this.collection[i] > this.collection[i + 1]) {
                        let tempLeft = this.collection[i];
                        this.collection[i] = this.collection[i + 1];
                        this.collection[i + 1] = tempLeft;
                        isSorted = false;
                    }
                }

                // HANDLE STRING LOGIC HERE
                if (typeof this.collection === "string") {
                    // HELP! -Sarah
                }
            }
            lastUnsorted--;
        }
    }
}
const newNumberGroup = new NumberGroup([10, 3, -5, 0])
const sortUtil = new SortUtil(newNumberGroup);
sortUtil.sort();
console.log(sortUtil.collection);