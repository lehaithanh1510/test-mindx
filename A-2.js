var s1 = "supers"
var s2 = "tower"
var newstring =[];
function xuLy ( s1,s2) {
    var j=0;
    for (var i=0; i<s1.length ;i++){
        newstring[j]=s1[i];
        newstring[j+1]=s2[i];
        j+=2;  
    }
}
if (s1.length == s2.length) {
    xuLy(s1,s2);
}
else if (s1.length>s2.length) {
    xuLy(s1,s2);
    var hieudodai = s1.length- s2.length;
    var count = s2.length;
    for (var i=2*s2.length;i<2*s2.length-1 + hieudodai; i++) {
        newstring[i] = s1[count];
        count++;
    }
    console.log(newstring.join(''))

}
else if (s2.length>s1.length) {
    xuLy(s1,s2);
    var hieudodai = s2.length- s1.length;
    var count = s1.length;
    for (var i=2*s1.length;i<2*s1.length-1 + hieudodai; i++) {
        newstring[i] = s2[count];
        count++;
    }
    console.log(newstring.join(''))

}

