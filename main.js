var Images=[
"https://www.yayskool.com/images/school/the-millennium-school-amritsar-414712194.png",
"https://image3.mouthshut.com/images/imagesp/925917426s.png"
];
var i=1
if ((i>2)){
i=1;	
}
function NextSlide(){
document.getElementById("School-Images").src=Images[i];i++;
}