function addelments(){
    var newDiv = document.createElement('div')
    newDiv.innerHTML="<h1>Hello world</h1>"
    document.body.insertBefore( newDiv, document.getElementById('block'));
}

addelments()