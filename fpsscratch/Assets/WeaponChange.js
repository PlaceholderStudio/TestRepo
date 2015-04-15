var weapons : GameObject[];
var classID : int = 1;
function Start () {
SelectWeapon(0 + classID);
}

function Update () {
if (Input.GetKeyDown("1")) SelectWeapon(0 + classID);
if (Input.GetKeyDown("2")) SelectWeapon(1 + classID);
if (Input.GetKeyDown("3")) SelectWeapon(2 + classID);
SecondarySwitch();
}

function SelectWeapon(index : int){
	for(var obj:GameObject in weapons)obj.SetActive(false);
	weapons[index].SetActive(true);
}
function SecondarySwitch(){
	if(Input.GetButtonDown("SwitchSecondary") && classID < 6){
		classID = classID + 3;
}
}