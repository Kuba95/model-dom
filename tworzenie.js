let btn = document.createElement( "button" );
console.log(btn.nodeType);
let textBtn = document.createTextNode( "Click me" );
console.log(textBtn);
let classBtn = document.createAttribute( "class" );
console.log(classBtn);

classBtn.value='btn';
console.log(classBtn);

document.body.appendChild(btn);
btn.appendChild(textBtn);
btn.setAttributeNode(classBtn);

btn.setAttribute('id','button');

//let paragraph=document.createElement('p');
//paragraph.setAttribute('class','paragraph');
//document.body.appendChild(paragraph);


//usuwam node typu atrybut
btn.removeAttributeNode(classBtn);
//usuwam atrbut
btn.removeAttribute('id');
//usuwam element
document.body.removeChild(btn);

//let rodzic=document.getElementById('rodzic');
//document.body.removeChild(rodzic);

document.getElementById('sectionFirst').removeChild(document.getElementById('parFirst'));