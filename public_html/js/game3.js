enchant();

window.onload = function() {
    var game = new Game(320, 320);

    game.onload = function() {
        var scene = new Scene3D();

        var light = new DirectionalLight();
        light.directionz = 1;
        light.color = [1.0,1.0,1.0];
        scene.setDirectionalLight(light);

        var camera = new Camera3D();
        camera.x = 0; camera.y = 0; camera.z = 10;
        camera.centerX = 0; camera.centerY = 0; camera.centerZ = 0;
        scene.setCamera(camera);

        var sphere = new Sphere();
        sphere.x = sphere.y = sphere.z = 0;
        scene.addChild(sphere);
    };

    game.start();
};
