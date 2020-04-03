'use strict';
let obj;
window.addEventListener('load', add);
window.addEventListener('load', start);
async function getfetch(){
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const request = new Request("http://localhost:8090/companies", { method: 'GET', cache: 'reload', headers: headers });
    const myResponse =  await fetch(request);
    let commits = await myResponse.json();
    let array = commits._embedded.companies;
    obj = await array;
    return await obj;
}
function start() {
    getfetch().then( e => {
        add(e);
    });
}
function add(myData)
{
    let doc = document.getElementsByClassName("company")[0];
    let divs = [];
    for(let i=0; i<myData.length; i++)
    {
        let h1 = document.createElement('h1');
        let h1text = document.createTextNode(myData[i].name);
        let image = document.createElement("IMG");
        let paragraph = document.createElement("p");
        let descriptiontext = document.createTextNode(myData[i].description);
        for(let j=0; j<4; j++)
        {
            divs[j] = document.createElement('div');
            if(j===0){
                divs[j].className += "row";
            }
            else if(j===3){
                divs[j].className += "col-md-6 active mb-4 text-center";
                let symbol = document.createElement('i');
                symbol.className += "fas fa-map-marker-alt mr-2";
                divs[j].append(symbol);
                divs[j].append(document.createTextNode(myData[i].city +", " + myData[i].street));
                divs[0].appendChild(divs[j]);
            }
            else {
                divs[j].className += "col-md-3 active mb-4 text-center";
                let symbol = document.createElement('i');
                if(j===1)
                {
                    symbol.className += "fas fa-mobile-alt mr-2";
                    divs[j].append(symbol);
                    divs[j].append(document.createTextNode(myData[i].mobilePhone));
                }
                else{
                    symbol.className += "fas fa-at mr-2";
                    divs[j].append(symbol);
                    divs[j].append(document.createTextNode(myData[i].email));
                }
                divs[0].appendChild(divs[j]);
            }

        }

        h1.className += "display-5 text-center p-4";
        image.className += "img-fluid float-left mr-4 p-3";
        image.setAttribute("src", "img/"+myData[i].name+".png");
        paragraph.className += "yumi mr-4";
        paragraph.append(descriptiontext);
        let divRow = document.createElement('div'); // row for image and text
        let divMD12 = document.createElement('div'); // row for div-md-12
        divRow.className += "row";
        divMD12.className += "col-md-12";
        divMD12.append(image);
        divMD12.append(paragraph);
        divRow.appendChild(divMD12);
        h1.append(h1text);
        doc.append(h1);
        doc.append(divRow);
        doc.append(divs[0]);
    }
   // console.log(divs);

//<h1 class="display-5 text-center p-4">Tetris</h1>
  //  <img class="img-fluid float-left mr-4 p-3" src="img/liga.jpg">
    //<p class="yumi mr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id sagittis tortor, ut tempus mi. Cras aliquet, nulla eget posuere euismod, arcu mi dignissim leo, ut consectetur dolor odio quis eros. Duis sit amet risus quis neque lacinia varius imperdiet lacinia tellus. Vestibulum sed neque nec ante tincidunt luctus non vel tortor. Donec at volutpat sem. Quisque bibendum nisl tempor mauris mollis, eu bibendum nulla vulputate. Duis sodales aliquam sem eget malesuada. Aenean vitae blandit metus. Cras ultricies sagittis cursus. Cras consequat orci ac nisi auctor tristique. Donec viverra ipsum ex, quis tempor velit tristique vitae.
    //Pellentesque porta velit nibh. Praesent imperdiet metus ac leo volutpat tempus. Duis pulvinar suscipit quam, eu semper ipsum euismod sed. Nam varius sapien ut elit accumsan tincidunt.</p>

}
