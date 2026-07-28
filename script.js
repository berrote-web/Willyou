let noCount = 0;

const replies = [
"🥺 Really...?",
"💔 Are you sure?",
"😭 You're making me cry...",
"🌸 Please think again...",
"💕 Give me one chance...",
"🥹 Pretty please...?",
"❤️ I'll always wait for you..."
];

function no(){

    const reply=document.getElementById("reply");
    const girl=document.getElementById("girl");
    const yesBtn=document.querySelectorAll("button")[0];

    reply.innerHTML=replies[Math.min(noCount,replies.length-1)];

    girl.style.filter="grayscale(40%)";
    girl.style.opacity=".9";
    girl.style.transform="translateY(8px)";

    yesBtn.style.transform=`scale(${1+(noCount*0.15)})`;

    createBrokenHeart();

    noCount++;
}

function yes(){

document.body.innerHTML=`

<div class="container">

<h1 style="font-size:60px;">💖 YAY!! 💖</h1>

<img src="anime.jpg" class="anime">

<h2 style="color:#ff1493;margin-top:20px;">
You Said YES!! 🌸
</h2>

<p style="font-size:22px;color:#d63384;margin-top:20px;line-height:1.8;">

Thank you for saying YES. ❤️<br><br>

You just made my heart smile. 🌸<br><br>

I hope this becomes one of the sweetest memories of your life. 💕

</p>

<h2 style="margin-top:25px;color:#ff1493;">
✨ Our Story Begins Today ✨
unlimated love🫀
maybe some chocolates🫣
forever 🎀🫀
</h2>

</div>

`;

celebration();

}

function celebration(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["💖","💕","💗","🌸","✨"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},120);

}

function createBrokenHeart(){

let heart=document.createElement("div");

heart.innerHTML="💔";

heart.style.position="fixed";
heart.style.left="50%";
heart.style.top="45%";
heart.style.transform="translate(-50%,-50%)";
heart.style.fontSize="60px";
heart.style.animation="spark 1s forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},1000);

}

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["💖","💕","🌸","✨"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

},400);

document.addEventListener("click",(e)=>{

let spark=document.createElement("div");

spark.className="sparkle";

spark.innerHTML="✨";

spark.style.left=e.clientX+"px";

spark.style.top=e.clientY+"px";

spark.style.fontSize="25px";

document.body.appendChild(spark);

setTimeout(()=>{
spark.remove();
},1000);

});
