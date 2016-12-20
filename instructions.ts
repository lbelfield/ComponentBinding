
//Documentation:
// *******************************************************************************************************************
// $onChanges(changes: any) is an angular method
// https://docs.angularjs.org/guide/component
// this allows the child component to share variables with the parent variable
// the parent.html has a child-component. The attribute is the parent variable
// the $ctrl.var is the variable in the child component 
// the this.bindings are part of the child component and are set to the variable.
// *******************************************************************************************************************


// Instructions:
// *******************************************************************************************************************
// in child.component.ts, uncomment the part you want, ie the visible/savingIndicator
// make sure the correct variable is then uncommented in the parent.html
// npm run build in Git Bash
// npm run start in Git Bash
// In Chrome, go to localhost/8000
// always check the CONSOLE Output in chrome dev tools - this logs the $onChanges method
// *******************************************************************************************************************


//Code:
// *******************************************************************************************************************
// visible - a boolean that determines whether the string 'Child component' appears in the browser
// hit the hideBtn and the boolean = false, so ngShow = false
// hit the showBtn and the boolean = true , so ngShow = true
// savingIndicator - a string. 
// 'hello' = showBtn
// 'world' = hideBtn
// important files - 2x component.ts and 2x .html.
// *******************************************************************************************************************
