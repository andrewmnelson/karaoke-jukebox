# K-Vox:

[![Build Status](https://travis-ci.org/sschadwick/karaoke-jukebox.svg?branch=master)](https://travis-ci.org/sschadwick/karaoke-jukebox)

Project is deployed on: https://kvox.herokuapp.com/

The lyrics and timing are hard-coded for the Yellow Submarine and Rainbow Connection examples.

### Karaoke Player and Room Management System
This app is designed to be used by a karaoke host. When patrons are linked to the app (typically a link on a poster in a bar) and click Sign In, they are assigned a unique id and given a QR code containing their id.

![QR Code](/docs/Demo/IMG_0074.PNG "Patron's Generated QR Code")

At this point, the admin has to scan the QR code to verify that the user is present and participating in karaoke. This verification step is intended to prevent abuse of the system. The admin portal is accessible at /#/kvox/admin, and a dummy admin of admin:foobar123 is hard-coded in. Once logged in, the admin is given a Choose File prompt. On a mobile device, this prompts the admin to take a photo. When the admin takes a photo of the user's QR code, the user is accepted and their device updates to the main menu using Socket.io.

![Main Menu](/docs/Demo/IMG_0076.PNG "Main Menu")

Users can choose to sing either Yellow Submarine or Rainbow Connection, update their username (default is Guest), and view the karaoke queue.

![Song Selection](/docs/Demo/IMG_0079.PNG "Song Selection")

![Change Username](/docs/Demo/IMG_0077.PNG "Change Username")

![Queue](/docs/Demo/IMG_0078.PNG "Queue")

The karaoke player is accessible at /#/kvox/renderer

![Next Up](/docs/Demo/Player.jpg "Next Up Call")

![Karaoke Player](/docs/Demo/Player2.jpg "Karaoke Player")
