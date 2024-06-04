const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  const files = await imagemin(["screenImg/*.{jpg,png}"], {
    destination: "zipImgs", // 输出文件夹
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8], // 输出图片质量
      }),
    ],
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();

var zipper = require("zip-local");
zipper.sync.zip(outPutFolder).compress().save("images.zip");
