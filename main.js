
$("#btn").click (function (){
    $("#div").append($("#titulo").val())
})


$("#btn2").click (function (){
    $("#div2").append(
        "<section id='inside'>"  + "<span>" + $("#ing").val() +" " +$("#qtd").val() +  "</span>" +"<button id='btn3'>" + "Apagar Item" +"</button>" +"</section>")
    $("section").click(function (){
        $(this).remove()
    })
})

$("#btn4").click (function (){
    $("#div3").append("<li>" + $("#inst").val()  + "</li>")
})


    function salvarReceita(){
        let titulo = document.getElementById("titulo").value;
        let ingredientes = document.getElementsByTagName("span");
        let instrucoes = document.getElementsByTagName("li");
        
        
        let contain_ingredientes = [];
        let contain_instructs = [];
      
        for(let i = 0; i < ingredientes.length; i++){
          contain_ingredientes += ingredientes[i].innerHTML + "\r\n";
        }
        
        for(let i = 0; i < instrucoes.length; i++){
          contain_instructs += (i + 1) + ". " + instrucoes[i].innerHTML + "\r\n";
        }
        
        let arquivo = "Nome da Receita: " + titulo  + "\r\n\r\n"+ "Ingredientes\r\n\r\n" + contain_ingredientes + "\r\n" + "Modo de preparo\r\n\r\n" + contain_instructs;
        let blob = new Blob([arquivo], { type: "text/plain"});
        download(blob, titulo +  ".txt");
      }
    
      function download(blob, nome){
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = nome;
      
        document.body.appendChild(a);
        a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        document.body.removeChild(a);
      }
















