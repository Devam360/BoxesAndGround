class Box{
    constructor(x,y,width,height)
    //the above function is created to initialise the object by constructor
    {
        var options={
            restitution:0.8, 
            friction:3,
            density:2
        }
        //the above statement was given to add the restitution, friction and density to the boxes
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        //the above command was given to add the body to the world 
    }
    display()
    //the above function was given to display the boxes
    {
        var pos = this.body.position;
        //the above statement was given to shorten the name of the position of the objects
        var angle= this.body.angle;
        push()
        translate(pos.x,pos.y)
        //the above command was given to give the original x and y position to the objects
        //rotate(angle+10);
        rectMode(CENTER);
        //the above command was given to define the x and y positions of the objects by their center value
        fill("yellow");
        //the above command was given to give the yellow color to the boxes
        rect(0,0,this.width,this.height);
        pop();
    }
}