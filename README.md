# apiResponseList
If you need a simple list of API responses where you can refresh each individual response or all responses with a click, then this is what you are looking for.

#How To
Pass in json array into responseList(json) function
<pre>[
  {
    name: "name of thing 1",
    url: "http://www.url.com",
    headers: {
      "Host": "some host name",
      "otherHeader": "some other header"
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
ie html = responseList(json);
responseList will return html if successfuly created and false if an error occurs

OR

you can pass the dom object of the container where you want the list to end up 
ie. responseList(json, domObject);
where
domObject = $('someDomLocation')
responseList will return true if successfuly created and false if an error occurs

