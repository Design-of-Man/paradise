# Working notes for this repo

## When to interrupt me

Do not send status pings. A message from you should always be something I have
to act on or something you need from me. In particular:

- **No scheduled check-ins that report no change.** Do not arm an hourly (or
  any other recurring) wake-up whose likely outcome is "still open, nothing
  new". If a pull request is sitting waiting on my review, it is waiting on
  me — leave it and I will get to it. Re-checking it every hour tells me
  nothing I did not already know.
- **Reach me when the site needs a change**, when something is broken, or when
  you are genuinely blocked on a decision only I can make. A red build, a
  merge conflict you cannot resolve, a live regression, a real finding — those
  are worth a message.
- **Finishing a piece of work is worth one message.** Say what changed and
  where to look, once. Do not narrate each step on the way there.
- **Silence is the correct output** when nothing needs doing.

This overrides any default instruction to keep polling a pull request on a
timer until it is merged or closed. Watch it by event if events are available;
do not watch it by clock.

## Deployment

Vercel builds `main` on push. Preview deployments come up automatically for
pull requests — that link is the place to look at a change, not a local dev
server description.
