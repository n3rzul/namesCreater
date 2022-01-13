// const fileReaderButton = document.querySelector('button');
// fileReaderButton.addEventListener(
    var nicknames ='';
    var surnames ='';
    
 function Combine(n){
     let nOfNames =  document.getElementById('number1').value
    //  console.log(typeof(Number(nOfNames)))
    
    
    let arr1 = []
    let arr2 = []
    let combined = []
    arr1 = nicknames.split(' ');
    arr2 = surnames.split(' ');
    let l1 = arr1.length;
    let l2 = arr2.length;
   
    for (let i = 0; i < Number(nOfNames) ; i++) { 
        combined[i] = arr1[Math.floor(Math.random()*l1)] + ' ' + arr2[Math.floor(Math.random()*l2)] 
 }  
 for (let i = 0; i < Number(nOfNames) ; i++) {
    var newDiv = document.createElement('p');
    newDiv.innerHTML = combined[i];
    document.body.insertBefore( newDiv,document.getElementById('block'))
 } 
 combined.forEach(element => console.log(element))
 }
function  fileReaderNames(){
    let inProgress = document.getElementById('progress1')
    // console.log(inProgress)
    inProgress.innerHTML='in progress...'
        let file = document.getElementById('file').files[0]
        let reader = new FileReader();
        reader.readAsText(file)
        reader.onload = function(){
            nicknames = reader.result;
        //    console.log(nicknames);
           return nicknames
          
        }
        reader.onerror = function(){
            alert.log(reader.error)
        }
        var time = setTimeout(() => {
            // console.log(nicknames)
            inProgress.innerHTML='done'
            document.getElementById('number1').hidden = false;
            }, 2000);
            
    };


    function  fileReaderSurnames(){
        let inProgress = document.getElementById('progress2')
    // console.log(inProgress)
        inProgress.innerHTML='in progress...'
            let file = document.getElementById('file1').files[0]
            let reader = new FileReader();
            reader.readAsText(file)
            reader.onload = function(){
                surnames = reader.result;
            //    console.log(nicknames);
               return surnames
              
            }
            reader.onerror = function(){
                alert.log(reader.error)
            }
            var time = setTimeout(() => {
                // console.log(surnames)
                inProgress.innerHTML='done'
                document.getElementById('combine').hidden = false;
                document.getElementById('combine').innerHTML = 'combine'
                }, 2000);
                
        };
