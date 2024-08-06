function adduser(){
    p1_name=document.getElementById("player1_name").value;
    p2_name=document.getElementById("player2_name").value;
    
    localStorage.setItem("player_1_name", p1_name);
    localStorage.setItem("player_2_name", p2_name);

    window.location="game_page.html"
}