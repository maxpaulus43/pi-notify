# pi-notify

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

## Publishing

`.github/workflows/publish.yml` publishes to npm on pushes to `main`, or when
manually run on `main`. It reads the package name and version from `package.json`
and skips versions already on npm. After publishing, it pushes a `v<version>`
tag and creates a GitHub release, using `CHANGELOG.md` notes when available and
generated notes otherwise.

Configure an npm [trusted publisher](https://docs.npmjs.com/trusted-publishers/)
for `pi-notify` with these GitHub Actions settings:

- Owner: `maxpaulus43`
- Repository: `pi-notify`
- Workflow filename: `publish.yml`
- Environment: leave blank

No `NPM_TOKEN` secret is needed. If the package does not yet exist on npm,
publish it once locally with `npm publish --access public`, then configure its
trusted publisher. For subsequent releases, run `npm version patch` (or `minor`
or `major`) with `--no-git-tag-version`, commit both package files, and push to
`main`. The workflow creates the tag after publishing.
