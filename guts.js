let wood = 0;
let ore = 0;
let rawfood = 0;
let steel = 0;
let woodWorkers = 0;
let miners = 0;
let farmers = 0;
function addwood(number) {
wood = wood + number
document.getElementById("woodcounter").innerHTML = wood; 
}
function addwoodworker(number) {
let woodworkersCost = Math.floor(10*Math.pow(1.1,woodWorkers));
if (wood > woodworkersCost) {
    woodWorkers = woodWorkers +1 
    wood = wood - woodworkersCost;
    document.getElementById("woodworkers").innerHTML=woodWorkers;
    document.getElementById("wood").innerHTML=wood; 
}
let nextCost = Math.floor(10*Math.pow(1.1, woodWorkers));
document.getElementById("woodworkersCost").innerHTML=nextCost;
}
function addore(number) {
    ore = ore + number
    document.getElementById("orecounter").innerHTML = ore; 
    }
    function addminer(number) {
    let minerCost = Math.floor(10*Math.pow(1.1,miners));
    if (steel > minerCost) {
        miners = miners +1 
        steel = steel - minerCost;
        document.getElementById("miners").innerHTML=miners;
        document.getElementById("steel").innerHTML=steel; 
    }
    let nextCost = Math.floor(10*Math.pow(1.1, miners));
    document.getElementById("minerCost").innerHTML=nextCost;
    }
    function addfood(number) {
        rawfood = rawfood + number
        document.getElementById("rawfood").innerHTML = rawfood; 
        }
        function addfarmer(number) {
        let farmerCost = Math.floor(10*Math.pow(1.1,farmers));
        if (rawfood > farmerCost) {
            farmers = farmers +1 
            rawfood = rawfood - farmerCost;
            document.getElementById("farmers").innerHTML=farmers;
            document.getElementById("rawfood").innerHTML=rawfood; 
        }
        let nextCost = Math.floor(10*Math.pow(1.1, woodWorkers));
        document.getElementById("farmerCost").innerHTML=nextCost;
        }
  function smelt(number) {
      if (ore > 5) {
          steel = steel +1;
          ore = ore -5; 
          document.getElementById("orecounter").innerHTML=ore;
          document.getElementById("steel").innerHTML=steel;
      }
  }


window.setInterval(function(){
addwood(woodWorkers);
addore(miners);
addfood(farmers);
},1000); 
