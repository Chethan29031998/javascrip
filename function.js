var arr1 = [13, 25, 45, 78, 65, 44, 75];
var flag = true

// function crtarr(arr1, d) {


    for (var i = 0; i <= arr1.length; i++) {
        var a = arr1[i]
        if (a == d) {
            flag = false
            console.log('true', i)
        
        }
    }
    if (flag == true) {
         return -1
    }


crtarr(arr1, 9)
crtarr(arr1, 78)