var bulletTex : GameObject[];
private var power = 10;
private var nextFire : float = 0.0;
private var fireRate : float = 0.5;
private var myDamage : float = 1;
var SemiAuto : boolean = false;
//var ShotgunSemi : boolean = false;
//var ShotgunAuto : boolean = false;
var gunShot : AudioClip;
var reloading : AudioClip;
var myPower : float = 0.0;
var myFireRate : float = 0.5;
var damage : float = 1;
private var BRange : float = 1000000000000000000;
var myRange : float = 1000000000000000000;
private var accuracy : float = 0;
var myAccuracy : float = 0;
private var mags : int = 5;
var myMags : int = 5;
private var boolet : int = 15;
var myBoolet : int = 15;
private var reload : float = 1.0;
var myReload : float = 1.0;
var magSize : int = 15;
private var weaponZoom : boolean = false;
var myZoom : boolean = false;
private var zoomFactor : float = 0.0;
var myZoomFactor : float = 0.0;
var originalZoom : float = 60;
private var bullets : int = 1;
var myBullets : int = 1;
var headshots : boolean = false;
var headshotMulti : float = 2.0;
private var enemyScript : Enemy;
function Start(){
}
function Update(){
	FullAutoFire();
	SemiAutoFire();
	Zoom();
	Reload();
}
//function FullAutoFire () {
//	var fwd = transform.TransformDirection(Vector3.forward);
//	fwd.x += Random.Range(-accuracy, accuracy);
//	fwd.y += Random.Range(-accuracy, accuracy);
//	fwd.z += Random.Range(-accuracy, accuracy);
//	var hit : RaycastHit;
//	Debug.DrawRay(transform.position, fwd, Color.red);
//	if(Input.GetButton ("Fire1") && Time.time > nextFire && SemiAuto == false && boolet > 0 && ShotgunSemi == false && ShotgunAuto == false){
//		nextFire = Time.time + fireRate;
//		boolet = boolet - 1;
//		AudioSource.PlayClipAtPoint(gunShot, Camera.main.transform.position, 1);
//		if(Physics.Raycast(transform.position, fwd, hit, BRange)){
//		Instantiate(bulletTex[Random.Range(0,3)], hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
//	if (hit.rigidbody !=null) {
//		hit.rigidbody.AddForceAtPosition(fwd * power, hit.point);
//}
//}
//}
//}
//function SemiAutoFire () {
//	var fwd = transform.TransformDirection(Vector3.forward);
//	fwd.x += Random.Range(-accuracy, accuracy);
//	fwd.y += Random.Range(-accuracy, accuracy);
//	fwd.z += Random.Range(-accuracy, accuracy);
//	var hit : RaycastHit;
//	Debug.DrawRay(transform.position, fwd, Color.red);
//	if(Input.GetButtonDown ("Fire1") && Time.time > nextFire && SemiAuto == true && boolet > 0 && ShotgunSemi == false && ShotgunAuto){
//		nextFire = Time.time + fireRate;
//		boolet = boolet - 1;
//		AudioSource.PlayClipAtPoint(gunShot, Camera.main.transform.position, 1);
//		if (Physics.Raycast(transform.position, fwd, hit, BRange)){
//		Instantiate(bulletTex[Random.Range(0,3)], hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
//	if (hit.rigidbody !=null) {
//		hit.rigidbody.AddForceAtPosition(fwd * power, hit.point);
//}
//}
//}
//}
if (gameObject.activeSelf){
	power = myPower;
	fireRate = myFireRate;
	damage = myDamage;
	BRange = myRange;
	accuracy = myAccuracy;
	boolet = myBoolet;
	weaponZoom = myZoom;
	zoomFactor = myZoomFactor;
	bullets = myBullets;
}
function Reload (){
	if (Input.GetButtonDown("Reload") && mags > 0 && boolet < magSize){
		AudioSource.PlayClipAtPoint(reloading, Camera.main.transform.position, 1);
		yield WaitForSeconds(myReload);
		boolet = magSize;
		mags = mags - 1;
}
}
function AutoReload(){
	if (mags > 0 && boolet == 0){
		AudioSource.PlayClipAtPoint(reloading, Camera.main.transform.position, 1);
		yield WaitForSeconds(myReload);
		boolet = magSize;
		mags = mags - 1;
}
}
function OnGUI(){
	GUI.Box(Rect(0,0,30,25),boolet.ToString() + mags.ToString());
}
function Zoom (){
	if (Input.GetButton ("Fire2") && weaponZoom == true){
		Camera.main.fieldOfView = zoomFactor;
}
	if (!Input.GetButton ("Fire2") && weaponZoom == true){
		Camera.main.fieldOfView = originalZoom;
}
}
function SemiAutoFire () {
	var fwd = transform.TransformDirection(Vector3.forward);
	var hit : RaycastHit;
	Debug.DrawRay(transform.position, fwd, Color.red);
	if(Input.GetButtonDown ("Fire1") && Time.time > nextFire && boolet > 0 && SemiAuto == true){
		nextFire = Time.time + fireRate;
		boolet = boolet - 1;
		AutoReload();
		AudioSource.PlayClipAtPoint(gunShot, Camera.main.transform.position, 1);
		for(var i : int = 0; i < myBullets; i++){
			fwd.x += Random.Range(-accuracy, accuracy);
			fwd.y += Random.Range(-accuracy, accuracy);
			fwd.z += Random.Range(-accuracy, accuracy);
			if (Physics.Raycast(transform.position, fwd, hit, BRange)){
				Instantiate(bulletTex[Random.Range(0,3)], hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
//				if (hit.transform.gameObject.tag == "Headshot" && headshots == true){
//					print ("Nice shot, mate.");
//					hit.transform.gameObject.SendMessage("Damage", damage * headshotMulti, SendMessageOptions.DontRequireReciever);
//					hit.collider.SendMessage("Damage", damage * headshotMulti, SendMessageOptions.DontRequireReciever);
//				}
//				}
//				if (!hit.transform.gameObject.tag == "Headshot" || headshots == false){
//					print ("Nice bodyshot and/or miss, NOOB!");
//					hit.transform.gameObject.SendMessage("Damage", damage, SendMessageOptions.DontRequireReciever);
//					hit.collider.SendMessage("Damage", damage, SendMessageOptions.DontRequireReciever);
//				}
	if (hit.rigidbody !=null) {
		hit.rigidbody.AddForceAtPosition(fwd * power, hit.point);
}
}
}
}
}
function FullAutoFire () {
	var fwd = transform.TransformDirection(Vector3.forward);
	var hit : RaycastHit;
	Debug.DrawRay(transform.position, fwd, Color.red);
	if(Input.GetButton ("Fire1") && Time.time > nextFire && SemiAuto == false && boolet > 0){
		nextFire = Time.time + fireRate;
		boolet = boolet - 1;
		AutoReload();
		AudioSource.PlayClipAtPoint(gunShot, Camera.main.transform.position, 1);
		for(var i : int = 0; i < myBullets; i++){
			fwd.x += Random.Range(-accuracy, accuracy);
			fwd.y += Random.Range(-accuracy, accuracy);
			fwd.z += Random.Range(-accuracy, accuracy);
			if (Physics.Raycast(transform.position, fwd, hit, BRange)){
				Instantiate(bulletTex[Random.Range(0,3)], hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
//				if (hit.transform.gameObject.tag == "Headshot" && headshots == true){
//					print ("Nice shot, mate.");
//					hit.transform.gameObject.SendMessage("Damage", damage * headshotMulti, SendMessageOptions.DontRequireReciever);
//				}
//				if (!hit.transform.gameObject.tag == "Headshot" || headshots == false){
//					print ("Nice bodyshot and/or miss, NOOB!");
//					hit.transform.gameObject.SendMessage("Damage", damage, SendMessageOptions.DontRequireReciever);
//				}
	if (hit.rigidbody !=null) {
		hit.rigidbody.AddForceAtPosition(fwd * power, hit.point);
}
}
}
}
}