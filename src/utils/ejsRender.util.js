import ejs from "ejs";
export const ejsRender = async (path, data) => {
  return await ejs.renderFile(path, data, {
    async: true,
  });
};
