export const useCurrentPage = () => {
   const arr = location.pathname.split('/')
   const page = arr[arr.length -1]
   return page.replace('.html', '')

}