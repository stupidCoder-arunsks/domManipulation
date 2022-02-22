class Queue {

    constructor(capacity){
        this.capacity = capacity;
        this.queue = new Array(capacity);
        // this.rear = capacity - 1;;
        this.rear = -1;
        this.front = this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    isFull(){
        return this.size === this.capacity;
    }
     
    enQueue(value){
       
        if(this.isFull()){
            console.log("Queue is Full.... ")
            return;
        }

      this.rear = this.rear + 1;
      this.queue[this.rear] = value;
      this.size = this.size + 1;
      console.log(`value added to queue ${value}`);

    }

    deQueue(){

        if(this.isEmpty()){
            console.log(`Queue is Empty`)
            return;
        }

        let item = this.queue[this.front];
        this.queue[this.front] = 0;
        this.front = (this.front + 1);
        this.size = this.size - 1;
        console.log(`Item removed from Queue ${item}`);

    }

    front(){
        if(this.isEmpty()){
            console.log(`Queue is Empty`)
            return;
        }

        return this.queue[this.front];
    }

    rear(){
        if(this.isEmpty()){
            console.log(`Queue is Empty`)
            return;
        }

        return this.queue[this.rear];
    }

}
 q = new Queue(5);
 q.enQueue(5)
 q.enQueue(6)
 q.enQueue(7)
 q.enQueue(8)
 q.deQueue();
 q.deQueue();
 console.log(q);
