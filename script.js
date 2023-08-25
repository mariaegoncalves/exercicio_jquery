$(document).ready(function(){
    const inputBox = $("#input-box")
    const listContainer = $("#list-container")

    function addTask(){
        if(inputBox.val === '') {
            alert("Você precisa escrever algo.");
        } else {
            let li = $("<li>").html(inputBox.val = (''));
            listContainer.append(li);
            let span = $("<span>").html("\u00d7");
            li.append(span);
        }
        inputBox.val = '';
        saveData();
    }

    listContainer.on("click", "li", function(){
        $(this).toggleClass("checked");
        saveData();
    })
    listContainer.on("click", "span", function(){
        $(this).parent.remove();
        saveData();
    })

    function saveData() {
        localStorage.setItem("data", listContainer.html());
    }

    function showTask() {
        listContainer.html() = localStorage.getItem("data");
    }
})