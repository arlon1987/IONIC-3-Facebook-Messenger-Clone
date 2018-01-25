Messenger Clone
===============

A humble attempt to clone facebook messenger in Ionic 2 - using the latest and best tools the platform can afford.
Most of this attempt has been channeled towards the interface. I badly would like to add the server layers necessary for a fully functional truly messenger-like experience.

Unlucky note: Facebook messenger UI updates kinda frequently - just incase this looks totally different from what you have :)

Another unlucky note: Ionic 2 barely became stable before Ionic 3 was announced. You get the gist? - expect frequent "breaking" changes.
This same applies to Angular 2 which was still toddling when Angular 4 was announced.

Yet another unlucky note: Ionicons, the icon set used by ion-icons is not there yet. And not there yet could mean really far dependable. So expect a few unusual icons

And the last unlucky note: I don't have an iPhone, yes you can weep for me. But you get it - I don't know what this app looks like on iOS.


Purpose
-------
I was evaluting the use of Ionic for a real project and the potential to move future app developments to hybrid.
Problem is that there aren't many popular hybrid apps out there - whose code is remotely accessible.
And given that Ionic is young, I bet there'd be a lot of potholes. And here comes the mission:
To emulate a real-world native app using a hybrid framework - Ionic. 
And I further extended this to include a demonstration of the latest functionalities + hacks + prog. guidelines for having a real app on hybrid.

Essentially, it should significantly reduce the "risk" factor of moving to hybrid. That is, if we could have something like Facebook's "sophisticated" Messenger on hybrid.


Screenshots
------------------
<p align="center">
	<img src="https://s3.amazonaws.com/ionic-marketplace/facebook-messenger-clone/screenshot_1.png" width="40%" />
	<img src="https://s3.amazonaws.com/ionic-marketplace/facebook-messenger-clone/screenshot_2.png" width="40%" />
</p>
<p align="center">
	<img src="https://s3.amazonaws.com/ionic-marketplace/facebook-messenger-clone/screenshot_4.png" width="40%" />
	<img src="https://s3.amazonaws.com/ionic-marketplace/facebook-messenger-clone/screenshot_5.png" width="40%" />
</p>


Local Development
-----------------
- clone this repo           `git clone https://github.com/arlon1987/IONIC-3-Facebook-Messenger-Clone.git`
- install depenencies       `npm install`
- view in browser           `ionic serve`
- add a mobile platform     `cordova platform add android`
- run on added platform     `ionic run android`


Development Roadmap
-------------------
Release 0.1
- UI for chat 
- UI for phone call
- UI for user account
- UI for group chat
- UI for contacts

Release 0.2
- Authentication via native facebook, google & twitter
- Detail implementation of account pages
- Detail implementation of group chat UI
- Phone and video Calling screen
- Enrich the chat box component

Release 0.3
- push notifications
- user profiles (conditional)
- make voice calling and video work
- upgrade to Ionic 3 or whatever is Ionic latest
- upgrade to Angular 4 and Typescript 2.2

Release 0.4
- sms in messenger
- qr code scanner
- show "typing now"