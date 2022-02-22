class Stack {

     constructor(maxSize){
         this.myStack = new Array(maxSize);
         this.top = -1;
         this.maxSize = maxSize;
     }

    //push
    push(value){
    return this.myStack[++this.top] = value;
    }
    //pop
    pop(){
       return this.myStack[this.top--];
    }
    //peek
    peek(){
       return this.myStack[this.top];
    }
    //isFull
    isFull(){
        return this.maxSize === this.top;
    }
    //isEmpty
    isEmpty(){
      return this.top === -1;
    }

}

const stack = new Stack(10);
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);
console.log(`popped element` , stack.pop());
stack.push(11);
console.log(`is Stack Empty ` , stack.isEmpty());
console.log(`stack peek ` + stack.peek());
console.log(`stack peek ` + stack.peek());

console.log(`Elements in stack` , stack.myStack);
console.log(`Element inside stack`);
while(!stack.isEmpty()){
    console.log(stack.pop());
}

console.log(`for stack obj 2`);
stackTwo = new Stack(5);
stackTwo.push(5);
console.log(stackTwo.myStack);


// console.log(stack.myStack.join(`,`))
