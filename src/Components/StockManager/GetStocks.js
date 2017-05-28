/** ======================= References ==========================
 * Stock API service:
 * https://docs.quandl.com/docs/parameters-2 HTTP request logic
 * (Sequential, Concurrent, Parallel):
 * https://gist.github.com/montanaflynn/cb349fd109b561c35d6c8500471cdb39
 */
var xhttp = new XMLHttpRequest();

/** ========================= Testing Area ======================================
 * Params shoud be passed as an object directly into function
 * sendSequentialRequests Object format is described here in "let params = {...}"
 */
const symbolList = ["FB", "AAPL", "AMZN"]

let params = {
    start_date: "2014-12-30",
    end_date: "2014-12-31",
    collapse: "none",
    transform: "none"
}
// sendSynchronousGetRequestHTTP(symbolList[0], params, callbackPrint)

/** callback example
 * data arrives as string - need to use JSON.parse to convert to obejct 
 * Notice JSON.stringify can be passed 2 extra params (null, '\t' - for tab indent) for formtting
*/
function callback(data) {
    parseData = JSON.parse(data)
    console.log("name: ", parseData.dataset)
    // console.log("print - ", JSON.stringify(JSON.parse(data), null, '\t'))
}

sendSequentialRequests(symbolList, params, callback)

/** ========================= Main method - sendSequentialRequests =================
 *  No need to pass anything into i
 * @param {*} symbolList
 * @param {*} params
 * @param {*} callback
 * @param {*} i
 */
function sendSequentialRequests(symbolList, params, callback, i = -1) {
    const count = symbolList.length;
    console.log("count", count)
    if (i == undefined) {
        i = -1
    }
    i += 1;
    if (i >= count) {
        return
    }
    console.log("i after ++ ", i)
    sendSynchronousGetRequestHTTP(symbolList[i], params, function (response) {
        console.log("sendSequentialRequests - sendSynchronousGetRequestHTTP - i", i)
        callback(response)
        sendSequentialRequests(symbolList, params, callback, i)
    })
} // End sendSequentialRequests

/** ======================= sendSynchronousGetRequestHTTP ==========================
 * Example request - "https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2014-01-01&end_date=2014-12-31&collapse=monthly&transform=rdiff&api_key={{APIKEY}}";
 * @param {*} stockSymbol
 * @param {*} params
 * @param {*} callback
 */
function sendSynchronousGetRequestHTTP(stockSymbol, params, callback) {

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhttp.response)
        }
    };
    const APIKey = "tvhwsPx4CYnzeVYQK_Fk";
    let symbol = stockSymbol;

    const serialzedParams = serialize(params)
    const baseURL = "https://www.quandl.com/api/v3/datasets/WIKI/"
    let requestURL = baseURL + symbol + ".json?" + serialzedParams + "&api_key=" + APIKey
    console.log(requestURL)
    xhttp.open("GET", requestURL, true);
    // false  = send method doesn't return until the response has arrived - deprecated
    xhttp.send();
} // End sendSynchronousHttp

/** ======================= serialize ==========================
 * Used to convert params object to get request params format
 * @param {*} obj
 * obj = flat object
 */
function serialize(obj) {
    var str = [];
    for (var p in obj) 
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
} // End serialize

export default sendSequentialRequests