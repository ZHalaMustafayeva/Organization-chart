
function add(btn){

    let li=btn.closest('li');
    
    if(li.children[4]){
        li.children[4].innerHTML += `
            <li class="new-list">
                <a href="#" class="new-link" ><span><input type="text"></span></a>
                <i onclick= "save(this)" class="fas fa-check-circle"></i>
                <i onclick="edit(this)" class="fas fa-pencil-alt"></i>
                <i onclick="remove(this)" class="fas fa-times-circle"></i>
            </li>
`
    }
    else{
        li.innerHTML += `
            <ul>
                <li class="new-list">
                    <a href="#" class="new-link" ><span><input type="text"></span></a>
                    <i onclick= "save(this)" class="fas fa-check-circle"></i>
                    <i onclick="edit(this)" class="fas fa-pencil-alt"></i>
                    <i onclick="remove(this)" class="fas fa-times-circle"></i>
                </li>
            </ul>
        `;
    }
}

function save(btn){
    let inputs = [... document.getElementsByTagName('input')];
    let check=true;

    if(check){
        inputs.forEach(function(a){
            a.parentElement.innerHTML=a.value;
        }); 
    }

    document.getElementsByClassName("fa-check-circle")[0].remove()
    var tag = document.createElement("i");
    tag.classList.add("fas");
    tag.classList.add("fa-plus-circle");
    var first = document.getElementsByClassName("new-link")[0];
    first.after(tag);

}

function remove(btn){
    btn.closest('li').remove()
}

function edit(btn){
    let li=btn.closest('li');
    let temp = li.children[0].innerText;
    li.children[0].innerHTML=`
        <input type="text" value="${temp}">
        <i onclick= "save(this)" class="fas fa-check-circle"></i>
    `
}