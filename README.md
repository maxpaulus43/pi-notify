# pi-notify-ghostty

A tiny Pi extension that sends a macOS notification when Pi has fully finished and is ready for input.

It uses Ghostty's native OSC 777 notification support. Clicking the notification returns to Ghostty and, where Ghostty supports it, the originating tab/surface.

## Install

From this checkout:

```sh
pi install /absolute/path/to/pi-notify
```

Or try it once:

```sh
pi -e /absolute/path/to/pi-notify
```

## Sound

Set `PI_NOTIFY_SOUND_CMD` before starting Pi:

```sh
export PI_NOTIFY_SOUND_CMD='afplay /System/Library/Sounds/Glass.aiff'
```

Leave it unset for no sound. Ghostty's `desktop-notifications` setting must be enabled (it is enabled by default).

## Scope

macOS and Ghostty only. The extension deliberately does nothing in Pi's print, JSON, and RPC modes.
