public var moveAmount: float = 1;
public var moveSpeed: float = 2;
public var GUN: GameObject;
public var moveOnX: float;
public var moveOnY: float;
public var defaultPos: Vector3;
public var newGunPos: Vector3;
function Start () {
	DefaultPos = transform.localPosition;
}

function Update () {
	moveOnX = Input.GetAxis("Mouse X")*Time.deltaTime * moveAmount;
	moveOnX = Input.GetAxis("Mouse Y")*Time.deltaTime * moveAmount;
	newGunPos = new Vector3(defaultPos.x+moveOnX,defaultPos.y+moveOnY,defaultPos.z);
	GUN.transform.localPosition = Vector3.Lerp(GUN.transform.localPosition,newGunPos, moveSpeed * Time.deltaTime);
}