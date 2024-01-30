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
                if (this.collection.compare(i, i + 1)) {
                    this.collection.swap(i, i + 1)
                    isSorted = false;
                }
                lastUnsorted--
            }
        }
    }
}


const newNumberGroup = new NumberGroup([10, 3, -5, 0])
const sortUtil = new SortUtil(newNumberGroup)
const newLinkedList = new LinkedListGroup()
newLinkedList.add(520)
newLinkedList.add(-10)
newLinkedList.add(-7)
newLinkedList.add(4)
const sorter3 = new SortUtil(newLinkedList)
sorter3.sort()
newLinkedList.print()

console.log(sortUtil.collection)