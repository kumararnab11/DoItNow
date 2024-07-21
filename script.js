let add=document.querySelector('#push');
let count=0;
add.addEventListener('click',()=>{
    console.log('Clicked');
    if(document.querySelector('#newtask input').value==0)alert("Enter a task");
    else{
        let temp= document.createElement('div');
        temp.className='task';
        let spn =document.createElement('span');
        let btn =document.createElement('button');
        btn.className='delete'
        let icon = document.createElement('i');
        icon.className='far fa-trash-alt';
        btn.appendChild(icon);
        spn.innerHTML=document.querySelector('#newtask input').value;
        temp.appendChild(spn);
        temp.appendChild(btn);
        document.querySelector('.tasks').appendChild(temp);
        document.querySelector('#newtask input').value="";
        count++;
        document.querySelector('.tasks span').innerHTML = count;
        let arr= document.querySelectorAll('.task');

        arr[arr.length-1].addEventListener('click',(e)=>{
            e.target.parentNode.remove();
            count--;
            document.querySelector('.tasks span').innerHTML = count;
        })
    }
    
})