# pair-bot-sandbox

Demo target repository for the [Slack pair-session bot](https://github.com/liatrio-forge/cursor-capstone-jack-mumford).

The bot creates `pair/<name>-<date>` branches here and pushes one commit per Slack prompt. Session
work is reviewed through pull requests into `main`.

- No dependencies: run the tests with `npm test` (uses Node's built-in test runner, Node 24+).
- `main` should always pass `npm test`.
