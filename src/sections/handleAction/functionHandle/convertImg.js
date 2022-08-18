
const convertToBase64 = function (base64) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (base64) {
      reader.readAsDataURL(base64)

    }
    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function (err) {
      reject(err)
    }
  })
}
export default convertToBase64
