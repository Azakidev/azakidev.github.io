/* Converts a query string into an object. 
* example input:  ?src=agency
* results: { src: "agency" }
*/
function parseQuery(str) {
    //Remove '?' from beginning.
    str = str.substring(1) 
    //split the string into key value pairs
    var pairs = str.split("&")
    //convert them into an object
    return pairs.reduce(function(map, pair) {
        console.log(pair)
        var kv = pair.split("=")
        var key = kv[0]
        var value = kv[1]
        map[key] = value
        return map
    },{})
}

//This function will change certain keywords on the page
function sillyImage() {
    image.src = "../images/sillypeek.png"
}

//How to get the data from the browser for real:
var profile = parseQuery(window.location.search);

//Personalize the headline
if(profile.silly == "true") {
    sillyImage()
}