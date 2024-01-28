
function randomQuotes() 
{
    var userName = [ "--Frank Sinatra" , "--Nelson Mandela" , " --Elbert Hubbard" , "--Epictetus" , "--Wayne Gretzy"];
    var text = ["The best revenge is massive success." , "Resentment is like drinking poison and waiting for your enemies to die." ,"Do not take life too seriously. You will not get out alive." , "It's not what happens to you, but how you react to it that matters.", "You miss 100% of the shots you don't take." ];
     
    var num = Math.floor ( Math.random() * userName.length );
    document.getElementById("text").innerHTML=`${ text[num]}`;
    document.getElementById("name").innerHTML=`${ userName[num]}`;
}
// randomQuotes();



