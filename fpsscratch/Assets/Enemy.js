var health : float = 10;
function Start () {

}

function Update () {

}
function Damage (damage : float){
	health = health - damage;
	if (health < 1){
		Destroy(gameObject);
}
}