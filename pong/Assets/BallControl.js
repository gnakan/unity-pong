﻿#pragma strict

var ballSpeed : float = 80;


function Start () 
{
	yield WaitForSeconds(2); //wait for 2 seconds
	GoBall();
}

//bug fix to address velocity not changing
function Update()
{
	var xVel : float = rigidbody2D.velocity.x;
	if (xVel < 18 && xVel > -18 && xVel != 0)
	{
		if(xVel > 0)
		{
			rigidbody2D.velocity.x = 20;
		}
		else
		{
			rigidbody2D.velocity.x = -20;
		}
	//Debug.Log("Velocity Before: " + xVel);
	//Debug.Log("Velocity After: " + rigidbody2D.velocity.x);
	
	}
	


}



//check if the ball hit's a player's paddle
function OnCollisionEnter2D (colInfo : Collision2D) 
{
	if (colInfo.collider.tag == "Player") {
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		audio.pitch = Random.Range(0.8f, 1.2f);
		audio.Play();
	}
}


function ResetBall()
{
	rigidbody2D.velocity.y = 0;
	rigidbody2D.velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds(0.5);
	
	GoBall();
}


function GoBall()
{
	var randomNumber = Random.Range(0, 2);
	
	if (randomNumber <= 0.5){
		//Debug.Log("Shoot right");
		rigidbody2D.AddForce(new Vector2(ballSpeed,10));
		
	}
	else{
		//Debug.Log("Shoot left");
		rigidbody2D.AddForce(new Vector2(-ballSpeed,-10));
	}
}