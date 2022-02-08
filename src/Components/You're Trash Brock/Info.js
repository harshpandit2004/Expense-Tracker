//i just dump my notes here now

//sample component

function Info() {

  

}
export default Info;

/*
//notes for chapter 1:
for importing your custom components in react, you will use the native import export thingy from js
the syntax for exporting your custom function/component from its file is: export default componentname;
for importing it in your main file its: import ComponentName from "./Path/Of/The/File";
and for calling your custom function/component, you need to use it as a <html-tag></html-tag> 
but with the first letter being capital
the react compiler expects the html code to always start with a non capital letter 
and the custom functions to always start with a capital letter
*/
/* 
Notes regarding custom functions:
you need to declare a custom functin same as app.js
syntax:
function ComponentName() { //its an ettiquete to name the function and the file same. 
                             because its a file dedicated for that only.
    return (
        <HTML-code></HTML-code>
    )
}

return FunctionName;

it is a convention in react that you create a new folder for every new function that you have.
*/
