class Node{
    constructor(value,priority){
        this.val = value;
        this.pri = priority;
        this.next = null;
    }
}

// class SLLPriority{
//     constructor(){
//         this.head = null;
//     }
//     append(){
//         newNode = SLNodePri(value,priority);
//         if (!this.head){
//             this.head = newNode
//         }
//         if(node1.pri < this.head.pri){
//             node.next = this.head
//             this.head = node
//             return this
//         }
//         var runner = this.head 
//         while ( runner.next && runner.next.pri <= node.pri){
//             runner = runner.next
//         }
//     }
//shawns example
    enqueue(value, pri) {
        var node = new SLNodePri(value,pri)
        if (!this.head) {
            this.head = node
            return this
        }
        if (node.pri < this.head.pri) {
            node.next = this.head
            this.head = node
            return this
        }
        var runner = this.head
        while (runner.next && runner.next.pri <= node.pri) {
            runner = runner.next
        }
        if (!runner.next) {
            runner.next = node
        } else {
            node.next = runner.next
            runner.next = node
        }
        return this
    }
    print(){
        var runner = this.head;
        var output = "";
        while(runner){
            output += `|| Val: ${runner.val} Priority: ${runner.pri} ||`;
            if(runner.next){
                output += " => "
            }
            runner = runner.next;
        }
        console.log(output);
    }
}

var node1 = new SLNodePri(1,2);
var node2 = new SLNodePri(3,6);
var listSLL = new SLLPriority();
console.log(listSLL);