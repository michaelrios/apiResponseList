# apiResponseList
If you need a simple list of API responses where you can refresh each individual response or all responses with a click, then this is what you are looking for.

## How To
Pass in json array into responseList(requestJson) function
<pre>[
  {
    name: "name of thing 1",
    url: "http://www.url.com",
    pathToResponseData: "response.data.stuff",
    headers: {
      Host: "some host name",
      otherHeader: "some other header"
    }
  },
  {
    name: "name of thing 2",
    url: "http://www.url2.com"
  },
  {
    url: "http://www.url3.com"
  }
  ...
]</pre>

and it will return the html for the list.
ie html = responseList(requestJson);
responseList will return html if successfuly created and false if an error occurs

OR

you can pass the dom object of the container where you want the list to end up 
ie. responseList(requestJson, options, domObject);
where
domObject = $('someDomLocation') and options = null
responseList will return true if successfuly created and false if an error occurs

## requestJson param
<table>
  <tr>
    <td><strong>optionName</strong></td>
    <td><strong>isRequired</strong></td>
    <td><strong>valueType</strong></td>
    <td><strong>example</strong></td>
  </tr>
  <tr>
    <td>url</td>
    <td>yes</td>
    <td>string</td>
    <td>www.google.com</td>
  </tr>
  <tr>
    <td>name</td>
    <td>no (will default to url)</td>
    <td>string</td>
    <td>Google</td>
  </tr>
  <tr>
    <td>jsonPathToResponseData</td>
    <td>no (will default to entire response)</td>
    <td>string</td>
    <td>response.data.stuff</td>
  </tr>
  <tr>
    <td>headers</td>
    <td>no</td>
    <td>object (keys are the header key, and values are the header value)</td>
    <td>{Host: "someHost"}</td>
  </tr>
</table>

## Options param
{
  listItemCss: "background-color: black; color: white", // will override default css for each item in the list
  popUpLeft: true, // the popups will show to the right by default, pass true here to make the show on the left (default false)
  showResponse: false, //will stop the popup tab from shoing to the right of the response list (default true)
}


