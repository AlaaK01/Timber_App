import './SideBar.css'


 const stars = new URL("../../images/stars1.png", import.meta.url)
 const moon = new URL("../../images/moon2.png", import.meta.url)
 const mountains3 = new URL("../../images/mountains3.png", import.meta.url)
 const mountains4 = new URL("../../images/mountains4.png", import.meta.url)
 const river = new URL("../../images/river5.png", import.meta.url)
 const boat = new URL("../../images/boat6.png", import.meta.url)
 const mountains7 = new URL("../../images/mountains7.png", import.meta.url)

 
 window.onscroll = function(){
   const starsL = document.getElementById('stars');
   const moonL = document.getElementById('moon');
   const mountains3L = document.getElementById('mountains3');
   const mountains4L = document.getElementById('mountains4');
   const riverL = document.getElementById('river');
   const boatL = document.getElementById('boat');
   const timberL = document.querySelector('#timber');
   const value = scrollY;
   starsL.style.left = value + 'px';
   moonL.style.top = value * 3 + 'px';
   mountains3L.style.top = value * 2 + 'px';
   mountains4L.style.top = value * 1.5 + 'px';
   riverL.style.top = value  + 'px';
   boatL.style.top = value  + 'px';
   boatL.style.left = value * 3 + 'px';
   timberL.style.fontSize = value  + 'px';
   if(scrollY >= 70){
     timberL.style.fontSize = 70 + 'px';
     timberL.style.position = 'fixed';
     if(scrollY >= 530){
       timberL.style.display = 'none';
      }
      else{
        timberL.style.display = 'block';
      }
      if(scrollY >= 200){
        //document.querySelector('.sidebar').style.background = 'radial-gradient(circle, rgba(185,148,164,1) 0%, rgba(60,110,167,1) 61%)';
        document.querySelector('.sidebar').style.background = 'radial-gradient(circle, rgba(185,148,164,1) 0%, rgba(60,110,167,1) 60%)';
        //document.querySelector('.sidebar').style.background = 'radial-gradient(circle, rgba(180,171,182,10) 0%, rgba(21,47,76,1) 60%)';
      }
      else{
        document.querySelector('.sidebar').style.background = 'radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(173,0,171,1) 0%, rgb(3, 17, 33) 60% )';
      }
      
      
    }
    
  };
  
  const SideBar = () => {
  
  return (
    <div className="sidebar">
      <div className="images">

        <img src={stars} id="stars" alt="HTML" />
        <h2 id="timber">Timber</h2>
        <img src={moon} id="moon" alt="HTML" />
        <img src={mountains3} id="mountains3" alt="HTML" />
        <img src={mountains4} id="mountains4" alt="HTML" />
        <img src={river} id="river" alt="HTML" />
        <img src={boat} id="boat" alt="HTML" />
        <img src={mountains7} id="mountains7" alt="HTML" />
      </div>
      <div className="content">
        <h2>Hitta ditt perfekta krogjobb bland annonser i Göteborg!</h2>
        <p>Vi kopplar samman arbetssökande med eftertraktade tjänster inom hotell och krogbranschen på ett smidigt och enkelt sätt. Vi ser till att processen mellan den första kontakten och kontraktsskrivning blir så kort och lätt som möjligt, så att ni som arbetstagare och arbetsgivare kan fokusera på det som är viktigt för er.</p>
            <p>Hos Timber får näringsidkare möjligheten att placera ut annonser inom hotell och krogindustrin. Arbetstagare får möjligheten att se över annonserna och ansöka tjänsten vid intresse. För att ställa ut annonser i Timber kontakta oss via "om oss" knappen </p>
            
      </div>
        
    </div>
  );

  
}

export default SideBar