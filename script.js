let send = document.getElementById('say');
function by(){
    send.style.animation='back 1.1s ease';
    setTimeout(()=>{
        send.style.display="none";
    },1000)
};


let about = document.getElementById('about');
about.addEventListener("click",()=>{
    if(send.style.display=="none"){
        send.style.display="";
        send.style.animation='slide 1s ease';
    }
    else{
        send.style.animation='back 1.1s ease';
        setTimeout(()=>{
            send.style.display="none";
        },1000)
    }
});




function winner(n1,n2,n3){
    title.innerHTML=`${array[n1]} winner`;
    document.getElementById('art'+n1).style.background='#000';
    document.getElementById('art'+n2).style.background='#000';
    document.getElementById('art'+n3).style.background='#000';
    setInterval(() => {title.innerHTML+="."}, 1000);
    setTimeout(() => {location.reload()},5000);
};



let array =[];
function win(){
    for(let i =1;i<10;i++){array[i]=document.getElementById('art'+i).innerHTML};
    if( array[1]==array[2] && array[2]==array[3] && array[1]!=""){winner(1,2,3)}
    else if( array[4]==array[5] && array[5]==array[6] && array[4]!=""){winner(4,5,6)}
    else if( array[7]==array[8] && array[8]==array[9] && array[7]!=""){winner(7,8,9)}
    else if( array[1]==array[4] && array[4]==array[7] && array[1]!=""){winner(1,4,7)}
    else if( array[2]==array[5] && array[5]==array[8] && array[2]!=""){winner(2,5,8)}
    else if( array[3]==array[6] && array[6]==array[9] && array[3]!=""){winner(3,6,9)}
    else if( array[1]==array[5] && array[5]==array[9] && array[1]!=""){winner(1,5,9)}
    else if( array[3]==array[5] && array[5]==array[6] && array[3]!=""){winner(3,5,6)}
};



let turn ='x';
let title=document.getElementById('titlegame');
function artclick(id){
    let element = document.getElementById(id);
    if(turn=='x' && element.innerHTML==""){
        element.innerHTML="x";
        turn='o';
        title.innerHTML="o";
    }else if(turn=='o' && element.innerHTML==""){
        element.innerHTML="o";
        turn='x';
        title.innerHTML="x";
    };
    win();
};