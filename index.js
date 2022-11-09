function getAmPm() {

    let meridian = "";
    let date = new Date();
  
    let hours = date.getHours();
  
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let minute = date.getMinutes();
  
  console.log(" today day and month" ,day,month)
  
  
    if (hours > 12) {
      meridian = "PM";
    } 
    else {
      meridian = "AM";
    }
  
    let totalTime = day + "-" + month + "-" + year + "  " + hours + " : " + minute + " " + meridian;
  
  
    return totalTime;
  }
  
  console.log(getAmPm());