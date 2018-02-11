/* ************************************************************* */
/* Read stats.json file from input and return a formatted object */
/* ************************************************************* */

export const readStats = file => {
  let reader = new global.FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = event => {
      const stats = JSON.parse(event.target.result);
      resolve({
        numOfComponents: stats[0].numberOfComponents,
        clientjs: stats[3].stats[0].extensionStats.source,
        serverjs: stats[2].stats[0].extensionStats.source,
        css: stats[3].stats[1].extensionStats.source,
        html: stats[1].stats[0].extensionStats.source
      });
    };

    reader.onerror = () => {
      return reject(this);
    };

    if (/^image/.test(file.type)) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  });
};
