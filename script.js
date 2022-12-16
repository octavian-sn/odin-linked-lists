// Node factory function
function Node(a = null, b = null) {
    return {
        value: a,
        next: b,
    }
}

// Linked List factory function
function LinkedList() {
    return {
        head: null,
    
        // Add new node to end of list
        append(value) {

            if (this.head === null) {
                this.head = Node(value);  
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = Node(value);
            }
        },

        // Add new node to start of list
        prepend(value) {
            this.head = Node(value, this.head)
        },

        // Return the total number of nodes
        size() {
            let current = this.head;
            if (this.head === null) return 0
            else {
                let count = 1
                while (current.next !== null) {
                    current = current.next;
                    count += 1
                } 
                return count;
            }
        },

        // Return the first node
        headN() {
            return this.head;
        }, 

        // Return the last node
        tailN() {
            let current = this.head
            while (current.next !== null){
                current = current.next
            }
            return current;
        },

        // Return node at given index
        at(index) {
            let current = this.head
            for (let i = 0; i < index; i++) {
                current = current.next
            }
            return current;
        },

        // Remove last node
        pop() {
            (this.at(this.size()-2)).next = null;
        },

        // Return true if list contains value
        contains(value) {
            let current = this.head;
            for (let i = 0; i < this.size(); i++) {
                if (current.value == value) return 'True';
                else current = current.next;
            }
            if (current == null) return 'False';
        },

        // Return index of node containing value or null if not found
        find(value) {
            let current = this.head;
            for (let i = 0; i < this.size(); i++) {
                if (current.value == value) return i;
                else current = current.next;
            }
            if (current == null) return current;
        },

        // Return nodes as strings
        toString() {
            let current = this.head;
            let string = '';
            for (let i = 0; i < this.size(); i++) {
                if (current.next == null) {
                    string += `( ${current.value} ) -> null`;
                } else {
                    string += `( ${current.value} ) -> `;
                    current = current.next;
                }
            }
            console.log(string);
        },
    }
}


const ll = LinkedList();

ll.append(1);
ll.append(2);
ll.prepend(3);
ll.append(2)
ll.append(50)
ll.append(40)
ll.append(30)


console.log(ll)



// ===================
// Recursion project

// Fibonacci using iterations
function fib(num){ // fib(9) => [0, 1, 1, 2, 3, 5, 8, 13, 21]
	let arr = [0]
	let a = 1;
	let b = 0;
	let control = a;
	for (let i = 1; i < num; i++) {
		arr.push(control)
		if (control == a) {
			b += a
			control = b
		} else {
			a += b 
			control = a
		}
	}
	return arr;
}

// Fibonacci using recursive functions
function fibR(num){ // ribR(9) => [1, 1, 2, 3, 5, 8, 13, 21, 34]
	if (num < 2) return [num]
	else {
		let current = fibR(num - 2).reduce((a, b)=> a + b, 1)
		let second = fibR(num - 1)
		return second.concat(current)
	}
}

// Another version of fibonacci recursive
function test(a){	
	if (a < 2) return a
	return test(a - 1) + test(a - 2);
}


// Merge sort algorithm
function mergeSort(a){
	if (a.length < 2) return a;
	else {
		let array = [];
		let left = a
		let right = left.splice(0, a.length / 2)
		
		let one = mergeSort(left)
		let two = mergeSort(right)
		
		while (one.length > 0 || two.length > 0) {
			if (!one[0]) {
				array = array.concat(two.splice(0, two.length))
			}
			else if (!two[0]) {
				array = array.concat(one.splice(0, one.length))
			}
			else if (one[0] < two[0]) {
				array = array.concat(one.splice(0, 1))
			} 
			else {
				array = array.concat(two.splice(0, 1))
			} 
		}
		return array;
	}
}
// Arrays for testing the merge-sort
let two = [9, 6]
let five = [9, 3, 2, 5, 1]
let eight = [10, 4, 7, 8, 1, 5, 2, 3, 6]
