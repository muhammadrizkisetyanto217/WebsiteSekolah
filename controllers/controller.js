class Controllers {
  static async home(req, res) {
    try {
      res.render("Home");
    } catch (error) {
      console.log(error);
    }
  }
  static async sejarah(req, res) {
    try {
      res.render("TentangKami/Sejarah");
    } catch (error) {
      console.log(error);
    }
  }
  static async tentangKami(req, res) {
    try {
      res.render("TentangKami/TentangKami");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controllers;
