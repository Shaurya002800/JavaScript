// stack (Primitive) heap (non-primitive)

let kuch = "Or kuch"

let hanji = kuch

hanji = "chi"

console.log(kuch);
console.log(hanji);

//stack memory mai ek ke uper ek variable memory 
// mai store hote h or agar koi same equal mai rekhoge to copy benagi 
// orignal will be same


let impDates={
    Feb : "28",
    May : "5"
}

let otherImp = impDates

otherImp.MAy = "8"

console.log(impDates);
console.log(otherImp);


// heap memory mai same refernce dete h if 
//u make something equal to something which means if jo variable equal 
//kera h usmai kuch change krte h toh orugnal wale bhi change hoga