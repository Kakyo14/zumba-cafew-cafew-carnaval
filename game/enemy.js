var Enemy = function(name, color, position, direction) {

  this.name = name;
  this.position = position;
  this.life = 0;
  this.direction = direction;
  this.speed = 0.05;

  this.material = new THREE.MeshLambertMaterial({
      color: color,
      });

  var singleGeometry = new THREE.Geometry();

  vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
  this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
  this.graphic.position.z = 6;

  this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));

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
Enemy.prototype.move = function () {
  var moveTo = new THREE.Vector3(
      this.speed * Math.cos(this.direction) + this.position.x,
      this.speed * Math.sin(this.direction) + this.position.y,
      this.graphic.position.z
  );

  this.position = moveTo;

  if (this.speed > 0) {
      this.speed = this.speed - 0.04;
  }
  else if (this.speed < 0) {
      this.speed = this.speed + 0.04;
  }

  this.graphic.position.x = this.position.x;
  this.graphic.position.y = this.position.y;
  
  light1.position.x = this.position.x;
  light1.position.y = this.position.y;
 //light1.position.z = this.graphic.position.z + 500;
};
