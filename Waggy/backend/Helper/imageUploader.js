const imageUploader = (file, folder) => {
  console.log(file.name, "name of the file");
  const fileExtension = file.name.split(".").pop();
  console.log(fileExtension, "file extension");
  const randomNo = Math.random().toString(36).substring(2);
  console.log(randomNo, "random number");
  const concatNum = `${randomNo}.${fileExtension}`;
  // console.log(concatNum, "filename");

  const pathfile = file.mv(`Public/Image/${folder}/${concatNum}`);
  console.log(pathfile, "path");
  return concatNum;
};
export default imageUploader;
