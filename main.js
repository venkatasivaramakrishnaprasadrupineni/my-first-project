function getfile(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file, true);
  xhr.onreadystatechange=function() {
    if(xhr.readystate===4 && xhr.state=="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
});
