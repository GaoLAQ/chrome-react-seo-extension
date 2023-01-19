import { DOMDetect } from "../types";
// const detectLogInPage = () => {
//   const inputPassWordDom = document.getElementById("password");
//   const isContainPasswordInput = isTextInput(inputPassWordDom, "password");
//   const isContainEmailInput = isTextInput(inputPassWordDom, "email");
//   if(!isContainPasswordInput){
//     return false
//   }
//   if(isContainEmailInput){
//     isContain
//   }
//   return

// };

const isTextInput = (ele: any, validType: string) => {
  let eleType = ele.type;
  return validType === eleType;
};

export default isTextInput;
