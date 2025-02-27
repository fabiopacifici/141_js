
/******************** 📌 chiamata Ajax  ********************/
// https://flynn.boolean.careers/exercises/api/random/int


/* fetch('https://flynn.boolean.careers/exercises/api/random/int')
  .then(response => {
    console.log(response);

    return response.json()
  })
  .then(data => {

    console.log(data)
    if (data.success) {
      document.writeln(data.response)
    }


  })
  .catch(error => console.error('Error:', error)); */



/******************** 📌 chiamata Ajax Presa da postmant ********************/

/* const myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6Ijh0cmFOQWxsRWJzamZpMFIwS3A1Z1E9PSIsInZhbHVlIjoicVpWNFdWZzVsRDlRN3psbk5SNTRacGtlY1U4S0x3cEQ2eUpcL0NqaElrMHFDMys0N3JNajF1SUFyQ1c3VTBUaUsiLCJtYWMiOiI5ODRkNTFiOTYwZjMyY2FkMDQwMWY3N2FmOTMyNGQ2OWUxZWFhZTNmOTUxMGVjNjNmZDk5NGQ1Yjc2OWM3YTllIn0%3D; laravel_session=eyJpdiI6IkVncnlrMjdCcng5a01FV3ZoaDRUb2c9PSIsInZhbHVlIjoiRWdOSDNnMjA1U1ZrUzFPT1cxcnlaQUhBYlZrRzRsRmhiWTV6NjYwRk00QlFFYzAwUlVEMVB4MGpCY1lzTkZENCIsIm1hYyI6ImI5ZWZjNmY0YWQ1NDE1OTk2ZTI1YzZlOWI1YzhiYWYzMTk3Y2FkMGI0NTJiN2QyYmM0NDBlNjdlZDAwNmNkOTIifQ%3D%3D");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
 */



/* 📌 With axios */

axios.get("https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2")
  .then(response => {
    console.log(response);
    console.log(response.data.response);

  })
  .catch(error => console.error(error));
