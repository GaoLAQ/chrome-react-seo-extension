import { DOMDetect } from "../types";
import * as $ from "jquery";

const categoryUrl = async () => {
  let settings = {
    async: true,
    crossDomain: true,
    url: "https://www.klazify.com/api/categorize",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTYyMzkzMWMwZTllNTIyMjQyN2U4OTYzMWIxODE1Njg0NWYyZGI3NGFmOWZlNzQ2MmFkODg5ODc0MWJhOTE5ZmE4NzZmMzllOWU3YmUwMDAiLCJpYXQiOjE2NzQxNjkxNTEsIm5iZiI6MTY3NDE2OTE1MSwiZXhwIjoxNzA1NzA1MTUxLCJzdWIiOiI5OTA5Iiwic2NvcGVzIjpbXX0.HVrlrLsjl0vpPTfbjua4qI5j0jJm8BgvfrJ2QFIjrZPb7gfUeFYl6XeKNHFuH-mnucY0IM0DIlqjGJIQsGwu9A",
      "cache-control": "no-cache",
    },
    processData: false,
    data: '{"url":"https://www.thameswater.co.uk/"}\n',
  };

  // $.ajax(settings).done(function (response) {
  //   console.log("!!!!!!!!!", response.domain.categories[0].name);
  // });
};

export default categoryUrl;
