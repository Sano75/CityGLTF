var scene, camera, renderer;
scene = new THREE.Scene();
var signs= [];

  function init() {
    // hide the loading bar
    const loadingElem = document.querySelector('#loading');
    loadingElem.style.display = 'none';

    //Signs
    {
    //Ikea
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/ikea.jpeg')
       });
       
    var geometry = new THREE.PlaneGeometry(18, 10);
    var ikea = new THREE.Mesh(geometry, material);
    ikea.position.set(8.8,28,-143.5)
    ikea.userData = {URL: "http://www.ikea.se"};
    signs.push(ikea);
    scene.add(ikea);

        //Ikea side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/ikea.jpeg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var ikea = new THREE.Mesh(geometry, material);
       ikea.position.set(21.5,28,-153.5)
       ikea.rotation.y = Math.PI/2;
       ikea.userData = {URL: "http://www.ikea.se"};
      // signs.push(ikea);
       //scene.add(ikea);

        //H&M
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/hm.jpg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var hm = new THREE.Mesh(geometry, material);
       hm.position.set(8.8,17,-143.5)
       hm.userData = {URL: "https://www2.hm.com/sv_se/rea.html"};
       signs.push(hm);
       scene.add(hm);

      //H&M side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/hm.jpg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var hm = new THREE.Mesh(geometry, material);
       hm.position.set(21.5,17,-153.5)
       hm.rotation.y= Math.PI/2;
       hm.userData = {URL: "https://www2.hm.com/sv_se/rea.html"};
       //signs.push(hm);
       //scene.add(hm);

      //Burger King
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/burgerking2.png')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var bk = new THREE.Mesh(geometry, material);
       bk.position.set(-95.8,17.2,-43)
       bk.userData = {URL: "https://www.burgerking.se/"};
       signs.push(bk);
       scene.add(bk);

     //Burger King side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/burgerking2.png')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var bk = new THREE.Mesh(geometry, material);
       bk.position.set(-84.2,17.2,-54)
       bk.rotation.y= Math.PI/2;
       bk.userData = {URL: "https://www.burgerking.se/"};
       //signs.push(bk);
       //scene.add(bk);
    
    //McDonalds
    var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/mcdonalds.jpg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var mc = new THREE.Mesh(geometry, material);
       mc.position.set(-95.8,17.2,-233)
       mc.userData = {URL: "https://www.mcdonalds.com/se/sv-se/hela-menyn/kampanj.html"};
       //signs.push(mc);
       //scene.add(mc);

     //McDonalds side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/mcdonalds.jpg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var mc = new THREE.Mesh(geometry, material);
       mc.position.set(-84.2,17.2,-244.4)
       mc.rotation.y= Math.PI/2;
       mc.userData = {URL: "https://www.mcdonalds.com/se/sv-se/hela-menyn/kampanj.html"};
       signs.push(mc);
       scene.add(mc);

       //Naturkompaniet
    var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/naturkompaniet.jpg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var mc = new THREE.Mesh(geometry, material);
       mc.position.set(-180.8,19,-143.5)
       mc.userData = {URL: "https://www.naturkompaniet.se/"};
       //signs.push(mc);
       //scene.add(mc);

     //Naturkompaniet side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/naturkompaniet.jpg')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var mc = new THREE.Mesh(geometry, material);
       mc.position.set(-168.2,19,-153.5)
       mc.rotation.y= Math.PI/2;
       mc.userData = {URL: "https://www.naturkompaniet.se/"};
       signs.push(mc);
       scene.add(mc);

        //Åhléns
    var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/ahlens.png')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var mc = new THREE.Mesh(geometry, material);
       mc.position.set(-180.8,19,47)
       mc.userData = {URL: "https://www.naturkompaniet.se/"};
       signs.push(mc);
       scene.add(mc);

     //Åhlén side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/ahlens.png')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var mc = new THREE.Mesh(geometry, material);
       mc.position.set(-168.2,19,35)
       mc.rotation.y= Math.PI/2;
       mc.userData = {URL: "https://www.naturkompaniet.se/"};
      // signs.push(mc);
      // scene.add(mc);

        //Clas Ohlson
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/clas-ohlson.png')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var hm = new THREE.Mesh(geometry, material);
       hm.position.set(92,18,-42.5)
       hm.userData = {URL: "https://www.clasohlson.com/se/"};
      // signs.push(hm);
       //scene.add(hm);

      //Clas Ohlson side
     var loader = new THREE.TextureLoader();
     var material = new THREE.MeshLambertMaterial({
       map: loader.load('images/clas-ohlson.png')
       });
       
       var geometry = new THREE.PlaneGeometry(18, 10);
       var hm = new THREE.Mesh(geometry, material);
       hm.position.set(81.5,18,-52.5)
       hm.rotation.y = -Math.PI/2;
       hm.userData = {URL: "https://www.clasohlson.com/se/"};
       signs.push(hm);
       scene.add(hm);
  }
  console.log(signs.length + " item in the Signs array");
  }
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }