# Growler

back from the dead as of July 31, 2021

## about

This repo was originally a jquery plugin for making alerts similar to the Growl application that was really popular at the time. Since then, notification center has been introduced, along with browser notifications, and jQuery has been more or less abandoned by the web developer community. For these reasons, and my own neglegance, this repo was left to rot and I eventually archived it. Recently though I've been inspired to modernize old code, and so I chose this repo to start with. 

More to come soon!

## Architecture

Growler is a notification system, but a Growler Message is pretty simple in general. 

A Growler Message can:
  - contain any HTML contents desired
  - be auto dismissed
  - be manually dismissed
  - be "expanded" for detailed contents*
  - animate on show and hide
  - have a custom delay for auto dismiss
  - be queued to avoid overload*
  - has callback hooks for on show, on dismissed, and on clicked

  *this queue requires an additional layer be designed. not part of MVP
  *expanded contents functionality is also not needed for MVP

## How to Use


## the old README contents for posterity

V1.1 | 02.21.2011
Lots of (basic) feature support added
- closeIcon: path to a custom close icon
- onShow: callback function for when message is visible
- onComplete: callback function for when message completes
- position: a 2 part string position for the alert (top-left, top-right, bottom-left, bottom-right)
- chain messaging support began, only does first and last sent messages right now (early work in progress)
- some code restructuring (sorry for the lack of comments, will come soon)
- demo updated to represent calls for the 4 corners

Next:
- Finish message queueing
- Expand demo to be a more functional documentation

V1 | 02.20.2011
by Luke Stebner (luke.stebner@gmail.com)
This is the release version 1 of my jQuery Growl Alert Plugin. It was created for a post on programming.linnnk.com and is available for anyone to use and expand as they please. Though if bugs are found or expansions are made I do ask that you share these with us in the comments on the post about the article. The post can be found at: http://programming.linnnk.com/javascript/jquery-growl-alert/

Feel free to contact me about this plugin via email, just make sure you include something in the subject that let's me know the email is in reference to this plugin or I may never read it!

Thanks and please enjoy this and be constructive in your criticism, not rude!

Current Features:
- Custom title/content text
- Manual close button
- Auto show on load
- Manually show function call
- Ability to change title/content through 'show' call
- Custom fade duration
- Custom message display duration

Future Plans:
- Custom close button
- Positioning options
