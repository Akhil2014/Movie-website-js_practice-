let div_img = document.getElementById("slideshow")

let arrObj = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM8sRQ_CrNfrWnrT-Pl2uvkfJZa5eA9ypgg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUWNw37ZSqogiDseAGjOvNbz3hgXfMfVKeg&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0nSQDlsXD3gpvcZFSSN6wRvkG1N5LnkzQQ&usqp=CAU"
 ]

 let imgs = document.createElement("img")
 let i = 0;
 setInterval(function(){
    imgs.src = arrObj[i]
    div_img.append(imgs)
  
     if(i===arrObj.length-1)
     {
         i=0
     }
     i++;
 },2000)

/*

 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC443icU59bBYSKib-Cg8scVoTVWM6KRwTooao-puhSA-Qm__ozFOeH9z34j3ou4PUCWw&usqp=CAU   galwakdi
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60ndiZkZCs8Td2rQMWT_k250wlt2V67N4_A&usqp=CAU   RRR
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz587F4So1JkfE7tiMmqk4oi9w_dfUXzzl5A&usqp=CAU  Multiverse of madness
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4eMHIO2MWsSl4EZfRRTEYrUsxFxypv3QwA_5_OsoqaDT8EwhU1lZdfyZrx4Fr2YwFUU&usqp=CAU  valmai
 https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7   KGF 2
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB_pnMEWuPMFyEgSKgmCtByra8d_Q7kymDu9srOSkuj4iQ193   jersey
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-hp1zaAZsOH8S9os0AO1fQaWXeNEclH_Zw&usqp=CAU  Duke
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7ArKHDaquTBklU4_TqPItJCf5DrinOrohg&usqp=CAU  Ambulance
 https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223002/FND_poster_TheBatman_InTheaters_Final.jpg  Batman
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxXqTvcaMYJ5QaU1hZzVp7NK9L7CiyQNm5A&usqp=CAU  world famous lover
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-848Fy5Do8W9ocSwHI_aZUVOq6bZw_4jVlroAtRG6ZL-0gjvehriz_FBUF0pij_FnPaQ&usqp=CAU  Kabir singh
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPOnYKRLVD6miT38wz-MdiGgAOpWKiG149kVzsfRjA-AgE8_9c5m-DUqO1BJTfdVe4QE&usqp=CAU  puspa
 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uxOr4EaCClpAmn1DPG0NAU8iGpXm-Fam_EkOafmOWX9xVf853uM3F2Z_FviSbt66_jA&usqp=CAU  83

 */

 let arr =  [];


 function movie(img,name,date,rating){
     this.image = img;
     this.name  = name;
     this.date = date;
     this.rates = rating;
 }

 let  m1  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC443icU59bBYSKib-Cg8scVoTVWM6KRwTooao-puhSA-Qm__ozFOeH9z34j3ou4PUCWw&usqp=CAU","Galwakdi","1 January 2022","5")
 let  m2  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60ndiZkZCs8Td2rQMWT_k250wlt2V67N4_A&usqp=CAU","RRR","1 January 2022","9")
 let  m3   = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz587F4So1JkfE7tiMmqk4oi9w_dfUXzzl5A&usqp=CAU","Multiverse Of Madness","1 January 2022","8.1")
 let  m4  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4eMHIO2MWsSl4EZfRRTEYrUsxFxypv3QwA_5_OsoqaDT8EwhU1lZdfyZrx4Fr2YwFUU&usqp=CAU","Valmai","1 January 2022","6.3")
 let  m5  = new movie("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7","KGF 2","1 January 2022","10")
 let  m6  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB_pnMEWuPMFyEgSKgmCtByra8d_Q7kymDu9srOSkuj4iQ193","Jersey","1 January 2022","8.2")
 let  m7  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-hp1zaAZsOH8S9os0AO1fQaWXeNEclH_Zw&usqp=CAU","Duke","1 January 2022","3.4")
 let  m8  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7ArKHDaquTBklU4_TqPItJCf5DrinOrohg&usqp=CAU","Ambulance","1 January 2022","7.3")
 let  m9  = new movie("https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223002/FND_poster_TheBatman_InTheaters_Final.jpg","Batman","1 January 2022","8.4")
 let  m10  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxXqTvcaMYJ5QaU1hZzVp7NK9L7CiyQNm5A&usqp=CAU","World Famous Lover","1 January 2022","9")
 let  m11  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-848Fy5Do8W9ocSwHI_aZUVOq6bZw_4jVlroAtRG6ZL-0gjvehriz_FBUF0pij_FnPaQ&usqp=CAU","Kabir Singh","1 January 2022","9.2")
 let  m12  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPOnYKRLVD6miT38wz-MdiGgAOpWKiG149kVzsfRjA-AgE8_9c5m-DUqO1BJTfdVe4QE&usqp=CAU","Puspa","1 January 2022","9.5")
 let  m13  = new movie("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uxOr4EaCClpAmn1DPG0NAU8iGpXm-Fam_EkOafmOWX9xVf853uM3F2Z_FviSbt66_jA&usqp=CAU","83","1 January 2022","6.4")
 arr.push(m1)
 arr.push(m2)
 arr.push(m3)
 arr.push(m4)
 arr.push(m5)
 arr.push(m6)
 arr.push(m7)
 arr.push(m8)
 arr.push(m9)
 arr.push(m10)
 arr.push(m11)
 arr.push(m12)
 arr.push(m13)
 
 window.addEventListener("load", function () {
    displayData(arr);
  });


function low(){
    console.log(1)
    arr.sort(function (a, b) {
        
        return a.rates - b.rates;
      });
      displayData(arr)
      console.log(arr)
}

function high(){
    console.log(6)
    arr.sort(function (a, b) {
        return b.rates - a.rates;
       
      });
      console.log(arr)
      displayData(arr)
}

localStorage.setItem("movies",JSON.stringify(arr));

let mainBox = document.getElementById("movies")

function displayData(arr){
arr.map(function(elem){
    let box = document.createElement("div")
    box.setAttribute("id","box")

    let image = document.createElement("img")
    image.setAttribute("class","myimage")
    image.src = elem.image

    let name = document.createElement("h2")
    name.setAttribute("class","title")
    name.innerText = elem.name

    let date = document.createElement("h3")
    date.innerText = elem.date
    date.setAttribute("class","date")

    let rates = document.createElement("p")
    rates.innerText = "IMDb rating" + " " +elem.rates

    box.append(image,name,date,rates)
    mainBox.append(box)


})


}
