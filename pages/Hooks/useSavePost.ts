import { setMaxListeners } from "events";
import { linkSync } from "fs";
import React from "react";
let id = 0;
      function getUniqueId(): string {
        return id++ + '';
      }
const useSavePost = () => {

  const SavePost = (
   
    username: any,
    designation: any,
    postImage: any,
    postAudio: any,
    pitch: any,
    description: any,
    company: any,
  ) => {
    const obj = {
      
      username: username,
      designation: designation,
      image: postImage,
      audio: postAudio,
      pitch: pitch,
      description: description,
      identity:getUniqueId(),
      company: company,
    };

    let fetchedData = localStorage.getItem("List");
    console.log("here", fetchedData);
    if (fetchedData) {
      let savedPosts = JSON.parse(fetchedData);
      console.log("here1");
      if (savedPosts) {
        console.log("here2");
        savedPosts.push(obj);
        localStorage.setItem("List", JSON.stringify(savedPosts));
      }
    } else {
      let newData = [];
      newData.push(obj);
      localStorage.setItem("List", JSON.stringify(newData));
    }
  };
  return { SavePost };
};

export default useSavePost;

