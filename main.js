var qoute=document.getElementById("quote");
var author=document.getElementById("author");

var groupsOfQuotes=[

    {
        qoute:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author:"― Mahatma Gandhi"
    },
    {
        qoute:"“It does not do to dwell on dreams and forget to live.”",
        author:"―Robert Frost"
    },
    
    {
        qoute:"“We are all in the gutter, but some of us are looking at the stars.”",
        author:"― J.K. Rowling"
    },
     
     {
        qoute:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
     {
        qoute:"“If you tell the truth, you don't have to remember anything.”",
        author:"― jomh Mark "
    },
    {
        qoute:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author:"― Mark Twain"
    },
    
    {
        qoute:"“Always forgive your enemies; nothing annoys them so much.”",
        author:"― Oscar Wilde"
    },
    
    {
        qoute:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche"
    },
   
    {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },
    {
        qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    },
    {
        qoute:"“The best revenge is massive success.”",
        author:"― Frank Sinatra"
    },
    {
        qoute:"“You miss 100% of the shots you don't take.”",
        author:"― Wayne Gretzy"
    },
   
    

]
function appearQuote(){
var random = Math.floor(Math.random()*groupsOfQuotes.length+1);
qoute.innerHTML=groupsOfQuotes[random].qoute;
author.innerHTML=groupsOfQuotes[random].author;


 }
