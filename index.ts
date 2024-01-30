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
                if (this.collection instanceof Array) {
                    if (this.collection.compare(this.collection[i], this.collection[i + 1])) {
                        this.collection.swap(this.collection[i], this.collection[i + 1])
                        isSorted = false;
                    }
                }
                lastUnsorted--
            }
        }
    }
}


const newNumberGroup = new NumberGroup([10, 3, -5, 0])
const sortUtil = new SortUtil(newNumberGroup)
sortUtil.sort();
console.log(sortUtil.collection)