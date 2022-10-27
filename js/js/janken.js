$(".a").on("click", function(){

var random = Math.floor(Math.random() * 3);
    if(random === 0){
        document.getElementById("result").innerHTML = "あいては　ホゲータを　くりだした！";
        document.getElementById("result_2").innerHTML = "タイプが　おなじで　けっちゃくが　つかない！";
        
    }else if(random === 1){
        document.getElementById("result").innerHTML = "あいては　ニャオハを　くりだした！";
        document.getElementById("result_2").innerHTML = "こうかは　ばつぐんだ！　あいての　ポケモンを　たおした！";
        

    }else{
        document.getElementById("result").innerHTML = "あいては　クワッスンを　くりだした！";
        document.getElementById("result_2").innerHTML = "あいしょうが　わるい！　やられてしまった！";
        $(".a").prop("disabled",true);
         
    }
})


$(".b").on("click", function(){

var random = Math.floor(Math.random() * 3);
if(random === 0){
    document.getElementById("result").innerHTML = "あいては　ホゲータを　くりだした！";
    document.getElementById("result_2").innerHTML = "あいしょうが　わるい！　やられてしまった！";
    $(".b").prop("disabled",true);
}else if(random === 1){
    document.getElementById("result").innerHTML = "あいては　ニャオハを　くりだした！";
    document.getElementById("result_2").innerHTML ="タイプが　おなじで　けっちゃくが　つかない！";
}else{
    document.getElementById("result").innerHTML = "あいては　クワッスンを　くりだした！";
    document.getElementById("result_2").innerHTML = "こうかは　ばつぐんだ！　あいての　ポケモンを　たおした！";
}

})

$(".c").on("click", function(){

var random = Math.floor(Math.random() * 3);
if(random === 0){
    document.getElementById("result").innerHTML = "あいては　ホゲータを　くりだした！";
    document.getElementById("result_2").innerHTML = "こうかは　ばつぐんだ！　あいての　ポケモンを　たおした！";
}else if(random === 1){
    document.getElementById("result").innerHTML = "あいては　ニャオハを　くりだした！";
    document.getElementById("result_2").innerHTML = "あいしょうが　わるい！　やられてしまった！";
    $(".c").prop("disabled",true);
}else{
    document.getElementById("result").innerHTML = "あいては　クワッスンを　くりだした！";
    document.getElementById("result_2").innerHTML ="タイプが　おなじで　けっちゃくが　つかない！";
}

})

