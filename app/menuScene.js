export default {
  key: "menu",

  create: function () {
    this.add.image(400, 180, "logo").setScale(1);
    this.add
      .text(400, 350, "Ton and Geld Studio", {
        align: "center",
        fontFamily: "sans-serif",
        fontSize: 48
      })
      .setOrigin(0.5, 0);
    this.input.on(
      "pointerdown",
      function () {
        this.scene.switch("play");
      },
      this
    );
  }
};
