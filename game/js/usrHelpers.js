export function usrHelpers(){
   function camelToKebab(str) {
      return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    }

    return{
      camelToKebab
    }
}