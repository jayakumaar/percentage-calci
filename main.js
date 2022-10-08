
var ct = 1;

function new_link() {
    ct++;
    var div1 = document.createElement('div');
    div1.id = ct;
    // link to delete extended form elements
    var delLink = '<a class="btn btn-danger" style="width:100%" href="javascript:delIt(' + ct + ')">Remove</a>';
    div1.innerHTML = document.getElementById('newlinktpl').innerHTML;
    document.getElementById('newlink').appendChild(div1);
    $('#' + ct + ' #del').append(delLink);

}
// function to delete the newly added set of elements
function delIt(eleId) {
    d = document;
    var ele = d.getElementById(eleId);
    var parentEle = d.getElementById('newlink');
    parentEle.removeChild(ele);
}



function findTotal() {
    var arr = document.getElementsByName('cre[]');
    var arr1 = document.getElementsByName('gp[]');
    var tot = 0;
    
    var numerator = 0;
    var temp1;
    var temp2;
    for (var i = 0; i <arr.length; i++) {
        if (parseInt(arr[i].value)) {
            tot += parseInt(arr[i].value);
            numerator += parseInt(arr[i].value) * parseInt(arr1[i].value);
        }
    }
    var k = document.getElementById('total').value = ((numerator / tot)+0.96).toFixed(2)
    var ans = k
    if (isNaN(ans)) ans = 0;
    document.getElementById("sgpa").innerHTML = "<samp><center><h3>Your SGPA is : " + ans + "/10</center></h3></samp";
    document.getElementById("minisgpa").innerHTML = "<samp><br><h3><center>" + ans + "</center></h3></samp>";
}

