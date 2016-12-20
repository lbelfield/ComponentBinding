class ChildController {

    // public visible: boolean;
    public savingIndicator: string;

    public $onChanges(changes: any):void {
        console.log(changes);

        // console.log(changes.visible.currentValue);
        // this.savingIndicator = changes.visible.currentValue;

        console.log(changes.savingIndicator.currentValue);
        this.savingIndicator = changes.savingIndicator.currentValue;
    }
}

class ChildComponent {
    public controller: typeof ChildController;
    public template: any;
    public bindings: any;

    public constructor(){
        this.controller = ChildController;
        this.template = require("./child.html");
        this.bindings = {
            // visible: "<"
            savingIndicator: "<"
        };        
    }
}

export default ChildComponent;