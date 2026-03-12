let muzyka = ["ambient","metal","rok","pop"]

function wyswietl(){
    document.getElementById("muzyka").innerHTML = muzyka
}
function dodaj(){
    let dodaj = document.getElementById("Dodaj").value;
    muzyka.push(dodaj);
      document.getElementById("muzyka").innerHTML = muzyka

}
function usun(){
    let dodaj = document.getElementById("Dodaj").value;
    muzyka.pop(dodaj);
      document.getElementById("muzyka").innerHTML = muzyka

}
function dodajnap(){
    let dodaj = document.getElementById("Dodaj").value;
    muzyka.unshift(dodaj);
      document.getElementById("muzyka").innerHTML = muzyka

}
function usunpier(){
    let dodaj = document.getElementById("Dodaj").value;
    muzyka.shift(dodaj);
      document.getElementById("muzyka").innerHTML = muzyka

}
function sortt(){
    muzyka.sort()
    document.getElementById("muzyka").innerHTML = muzyka
}
function sprawdz(){
    if (muzyka.includes("ambient")){
            document.getElementById("tn").innerHTML = "Tak,ambient jest w liscie"

    }else{
         document.getElementById("tn").innerHTML = "Nie,ambienta nie ma w liscie"
    }
}
function pierw(){
    if (muzyka.includes("ambient")){
            document.getElementById("tn").innerHTML = "Tak,ambient jest w liscie"

    }else{
         document.getElementById("tn").innerHTML = "Nie,ambienta nie ma w liscie"
    }
}

function wyswietlPierwszy() {
  document.getElementById("wynik1").innerText = "Pierwszy: " + muzyka[0];
}


function wyswietlLiczbe() {
  document.getElementById("wynik2").innerText = "Liczba elementów: " + muzyka.length;
}


function wyswietlDwa() {
  document.getElementById("wynik3").innerText = "Dwa pierwsze: " + muzyka[0] + ", " + muzyka[1];
}


function wyswietlWszystkie() {
  document.getElementById("wynik4").innerHTML = muzyka.join("<br>");
}
