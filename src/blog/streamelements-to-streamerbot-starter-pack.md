---
title: "StreamElements to Streamer.Bot Starter Pack"
date: "2026-05-25"
description: "Transition to Streamer.Bot smoothly"
styledWordClasses:
    [
        "md:text-4xl lg:text-4xl font-bold text-blue-300",
        "md:text-3xl lg:text-3xl font-thin",
        "md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-blue-300",
        "md:text-5xl lg:text-6xl font-extrabold",
        "md:text-5xl lg:text-6xl font-extrabold",
    ]
---

In my opinion, Streamer.Bot is the best self-host alternative to StreamElements, with the help from the community building frequently demanded tools to be easily imported into Streamer.Bot.

## TL;DR:

You can see the starter pack import file from here, then Ctrl+S or Cmd+S to download:

<a href="/streamerbot/StreamerBotStarterPack.sb" target="_blank" class="">Click here for Starter Pack</a>

### Nutty's Widgets

Nutty made a lot of widgets powered by Streamer.Bot, find all his FREE products on https://nutty.gg/.

- [Twitch Ad Countdown Widget](https://nutty.gg/en-aud/products/twitch-ad-countdown-widget)
- [Multi Chat Overlay](https://nutty.gg/en-aud/products/multichat-overlay)
- [Horizontal Chat](https://nutty.gg/en-aud/products/horizontal-chat)
- [Multistream Alerts](https://nutty.gg/en-aud/products/multistream-alerts)
- [Multistream Title Updater](https://nutty.gg/en-aud/products/multistream-title-updater)

# Content of Starter Pack

## Custom Commands (by Rondhi)

https://extensions.streamer.bot/t/custom-commands/1036

This extension aims to emulate the functionality of simple chat command/responses that StreamElements and Nightbot are capable of. The goal is to give your moderators the ability to create simple command/responses without needing access to Streamer.bot. This extension also works cross-platform between Twitch, YouTube, and Kick and works across these platforms even when multi-streaming to some or all platforms at the same time.

## Ad Management (by Phlare)

<a href="/streamerbot/AdManagement.sb" target="_blank" class="">Click here for Ad Management action file</a>

Set of triggers and actions to help monitor and notify both streamer and viewers about upcoming ads, include actions where things can be fire when ads run and when they finish, automatically adjusts based on ad management settings

## Nutty's Streamer.bot Starter Pack

https://nutty.gg/en-aud/products/streamer-bot-starter-pack

- !8ball
- !accountage
- !clip
- !flipcoin
- !followage
- !fortune
- !lurk
- !russianroulette
- !sacrifice
- !scene
- !setgame
- !settitle
- !shoutout
- !time
- !translate
- !uptime
- Twitch + YouTube + Kick Events -> Windows Notifications
- Twitch + YouTube + Kick -> Chat Message Notification

## Weather (WebMage, forked by RythonDev)

<a href="/streamerbot/WeatherCommand.sb" target="_blank" class="">Click here for Ad Management action file</a>

Forked from: https://extensions.streamer.bot/docs?topic=42

### Instructions

1. Import the Action if you haven't already.
2. Get an API key from: https://www.weatherapi.com/.
3. Click on the newly imported action and find the folder named Query setup.
4. Double-click on the line that says “<Insert API Key Here>”
5. Find the API Key that you created earlier and paste it into the Value box.
6. If you do not have one, please follow the steps in the Prerequisite section above.
    - (Optional: You can change the returned language by changing the variable to your language of choice.)
7. Open the Execute Code (WeatherLookup) sub-action
8. Click on References. Right click and select “Add Reference from File”
9. Navigate to your .NET folder (typically C:\Windows\Microsoft.NET<wbr/>\Framework\v4.0.30319\) and select System.dll.
10. Do this again and select System.Net.dll
11. You should now have three files in your references: mscorlib.dll, System.dll, and System.Net.dll
12. Click Compile. You should see a message in Compiling Log tab that says “Compiled successfully!”
13. Click Save and Complie.
