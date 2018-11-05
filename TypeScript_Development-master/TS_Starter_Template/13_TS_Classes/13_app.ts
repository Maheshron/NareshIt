interface  Vehicle{
    specification();
}
class Car implements  Vehicle{
    private model:string;
    private year:number;
    private mileage:string;
    private color:string;
    constructor(model,year,mileage,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    public getModel():string{
        return this.model;
    }
    public get getYear():number{
        return this.year;
    }
    public get getMileage():string{
        return this.mileage;
    }
    public getC
    public specification():string{
        return " ";
    }
}