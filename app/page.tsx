
const reminders=[
"Drink water 💧",
"Eat on time 🍲",
"Sleep properly 😴",
"Stop skipping meals 😑",
"Someone loves seeing you healthy ❤️"
]

export default function Page(){
return (
<main>
<section style={{height:"100vh",position:"relative"}}>
<img src="/couple.png" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,.55)"}}/>
<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"20px"}}>
<div>
<h1 style={{fontSize:"4rem"}}>Hey Senorita,</h1>
<h2>Your Marito is here.</h2>
<p style={{maxWidth:"700px"}}>
Among all the sensible choices you could have made, you somehow chose me.
I'm still trying to understand that decision.
</p>
</div>
</div>
</section>

<section style={{padding:"80px 20px",maxWidth:"900px",margin:"auto"}}>
<h2>Why Are You Still Here?</h2>
<p>I overthink. I annoy you. I disturb your peace. I ask if you've eaten far too many times.</p>
<p>Yet somehow... you still stay.</p>
</section>

<section style={{padding:"80px 20px",textAlign:"center"}}>
<h2>Daily Reminder</h2>
<div id="reminder" style={{fontSize:"1.5rem"}}>{reminders[0]}</div>
<button
onClick={()=>{
const el=document.getElementById("reminder");
const current=el?.innerHTML;
const idx=Math.max(0,reminders.indexOf(current||reminders[0]));
el!.innerHTML=reminders[(idx+1)%reminders.length];
}}
style={{padding:"12px 24px",marginTop:"20px"}}
>Next Reminder</button>
</section>

<section style={{padding:"80px 20px",maxWidth:"700px",margin:"auto"}}>
<h2>Our Timeline</h2>
<ul style={{lineHeight:"3"}}>
<li>First Conversation</li>
<li>↓</li>
<li>First Laugh</li>
<li>↓</li>
<li>First Care</li>
<li>↓</li>
<li>First Fight</li>
<li>↓</li>
<li>Still Here</li>
<li>↓</li>
<li>Today</li>
<li>↓</li>
<li>Many More Chapters Ahead</li>
</ul>
</section>

<section style={{padding:"80px 20px",maxWidth:"800px",margin:"auto"}}>
<h2>For My Senorita</h2>
<p>"നിന്റെ കൂടെ ഉള്ളപ്പോൾ ജീവിതം കുറച്ചു കൂടി മനോഹരമാകുന്നു."</p>
<p>"എന്റെ ദിവസങ്ങളിൽ ഏറ്റവും ശാന്തമായ ഭാഗം നീയാണ്."</p>
<p>"എന്നെക്കാൾ നിന്നെ നോക്കിക്കൊള്ളാൻ എനിക്ക് ഇഷ്ടമാണ്."</p>
<br/>
<p>
I don't think love is grand gestures.
I think it's remembering whether you've eaten,
getting worried when you don't reply,
and wanting you healthy, happy, and around.
</p>
</section>

<section style={{padding:"100px 20px",textAlign:"center"}}>
<h2>Thank you for choosing me.</h2>
<p>On the days I'm easy to love. And on the days I'm not.</p>
<h3>— Your Marito ❤️</h3>
</section>
</main>
)
}
