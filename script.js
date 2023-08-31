 $(document).ready(function(e){
    const inputBox = $("#input-box");
    const listContainer = $("#list-container");

    function addTask(){
        const taskText = inputBox.val().trim();
        
        if(taskText === '') {
            alert("Você precisa escrever algo.");
        } else {
            const li = $("<li>").html(taskText);
            const span = $("<span>").html("\u00d7");

            listContainer.append(li);
            li.append(span);
            inputBox.val('');

            saveData();
        }   
    };

    listContainer.on("click", "li", function(){
        $(this).toggleClass("checked");
        saveData();
    })
    listContainer.on("click", "span", function(){
        $(this).parent().remove();
        saveData();
    });

    function saveData() {
        localStorage.setItem("data", listContainer.html());
    };

    // carregar a lista salva do localStorage ao carregar a pagina
    function loadSavedData() {
        const savedData = localStorage.getItem("data");
        if (savedData) {
            listContainer.html(savedData);
        }
    };

    // carregar dados salvos ao iniciar a pagina
    loadSavedData();

    // lidar com o evento de clique no botão "Add"
    $("#button").on("click", addTask);

    // tecla Enter pressionada no campo de texto
    inputBox.keypress(function(event){
        if (event.which === 13) { // 13 representa a tecla enter
            addTask()
        }
    });
});