$(function()
{
   console.log("dom is ready")


const teams =[
    {
        id : "0",
        classlogo : "csklogo",
       teamname : "chennai super kings",
       classtext :"csktext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368389.cms",
       teamlogo : "https://www.eventstodayz.com/wp-content/uploads/2019/03/csk-hd-logo-2020.png"
       
    },
     {
        id : "1",
       teamname : "delhi capitals",
       classlogo : "delhilogo",
       classtext : "delhitext",
       teamurl : "https://timesofindia.indiatimes.com/photo/68405443.cms",
       teamlogo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png"
       
    },
     {
        id : "2",
       teamname : "kolkata night riders",
       classlogo : "kolkatalogo",
       classtext : "kolkatatext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368434.cms",
       teamlogo : "https://i.pinimg.com/originals/24/ac/85/24ac856684a5edacdbe58914839c8215.png"
       
    },
    {
        id : "3",
       teamname : "punjab kings",
       classlogo : "punjablogo",
       classtext : "punjabtext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368442.cms",
       teamlogo : "https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg"
       
    },
     {
        id : "4",
       teamname : "mumbai indians",
       classlogo : "mumbailogo",
       classtext : "mumbaitext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368446.cms",
       teamlogo : "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png"
       
    },
    {
        id : "5",
       teamname : "sunrisers hyderabad",
       classlogo : "sunriserslogo",
       classtext : "sunriserstext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368457.cms",
       teamlogo : "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png"
       
    },
    {
        id : "6",
       teamname : "rajhastan royals",
       classlogo : "rajhastanlogo",
       classtext : "rajhastantext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368466.cms",
       teamlogo : "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png"
       
    },
     {
        id : "7",
       teamname : "royal challegers bengulur",
       classlogo : "bengulurlogo",
       classtext : "bengulurtext",
       teamurl : "https://timesofindia.indiatimes.com/photo/63368476.cms",
       teamlogo : "https://www.deccanherald.com/sites/dh/files/articleimages/2020/10/20/eqtmn0fucaancyu-804484-1603180070.jpg"
       
    }]

/*
<div class="card">
       <img class="cardimage" src="https://timesofindia.indiatimes.com/photo/63368457.cms"/>
       <div class="logocard pos1">
           <img class="logoimage" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rajasthan_Royals_Logo.svg/1200px-Rajasthan_Royals_Logo.svg.png"/>
        </div>
       <h1 class="csktext">chennai super kings</h1>
     </div>
*/

for(var i = 0;i<teams.length;i++)
{

   renderteams(teams[i])
}



function renderteams(teams)
{
var card = $("<div>").addClass('card').attr('id',teams.id)
var cardimage = $("<img>").attr({
   "src" : teams.teamurl
}).addClass("cardimage")
card.append(cardimage)
var logocard = $("<div>").addClass(`logocard ${teams.classlogo}`)
var logoimage  = $("<img>").attr("src",teams.teamlogo).addClass("logoimage")
logocard.append(logoimage)
card.append(logocard)
var text = $("<h1>").addClass(`text ${teams.classtext}`).text(teams.teamname)
card.append(text)
$(".teams").append(card)
card.click(function(event)
{
   console.log(event.currentTarget.id)
   localStorage.setItem('id',JSON.stringify(event.currentTarget.id))
   window.location.assign('./teamdetailspage.html')
   
})
}










   })