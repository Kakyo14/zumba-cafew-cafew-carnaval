var Enemy = function(name, color, position) {

  this.name = name;
  this.position = position;
  this.life = 0;

  this.material = new THREE.MeshLambertMaterial({
      color: color,
      });

  var singleGeometry = new THREE.Geometry();

  vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
  this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
  this.graphic.position.z = 6;

};

Enemy.prototype.dead = function () {
  this.graphic.position.z = this.graphic.position.z-0.1;
      //Nettoyage de la div container
      $("#container").html("");
      jQuery('#'+this.name+' >.life').text("Enemy was killed !");
      init();
}

Enemy.prototype.displayInfo = function () {
  jQuery('#'+this.name+' >.life').text(this.life);
}

