export class Fruit {
    description: string[];
    prix:any;
    isOn: boolean;
    imageUrl: any;
    famille:string;
    startTime: string;
    endTime: string;
    constructor(public name: string) {
    this.description=[];
    this.isOn = false;
    this.startTime = '';
    this.endTime = '';
    }
    }