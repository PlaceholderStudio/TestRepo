var bulletCasing : Rigidbody;
var ejectSpeed : int = 10;
var fireRate : float = 0.5;
private var nextFire : float = 0.0;
function Start () {

}

function Update () {
if (Input.GetButton("Fire1") && Time.time > nextFire){
nextFire = Time.time + fireRate;
var clone : Rigidbody;
clone = Instantiate(bulletCasing, transform.position, transform.rotation);
clone.velocity = transform.TransformDirection(Vector3.left * ejectSpeed);
}
}