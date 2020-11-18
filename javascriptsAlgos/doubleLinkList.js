class DLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const temp = new DLNode(val);
        if(this.head === null) {
            this.head = temp;
            this.tail = temp;
        } else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = this.tail.next;
        }
    }

    print() {
        let runner = this.head;
        let out = "head -> ";
        while(runner) {
            out += runner.value + " -> ";
            runner = runner.next;
        }
        console.log(out);
    }

    printReverse() {
        let runner = this.tail;
        let out = "tail -> ";
        while(runner) {
            out += runner.value + " -> ";
            runner = runner.prev;
        }
        console.log(out);
    }
}


const list1 = new DLL();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.print();
list1.printReverse();