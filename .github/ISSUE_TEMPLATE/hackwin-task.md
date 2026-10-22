---
name: HackWin task
about: One task, one pull request. Fill every field of the data block; the deadline is required.
---
<!-- hackwin:begin -->
<!--
Help for writing this task, not part of it: delete this comment and the example at the end before you create the issue.

The Lead's planning session can write the whole issue for you: tell it what the task must achieve, and it fills in this template and creates the issue with `gh issue create`.

HackWin reads only the data block below. Fill in:
- role: the one role that does the task. The roles of this team and their paths, from owners.yml:
  - shared, the Lead's shared role: "src/shared/**", "docs/**", ".github/**", and every path that no other role names
  - counter: "src/features/counter/**"
  - todos: "src/features/todos/**"
  - greeting: "src/features/greeting/**"
  - open to every role: "README.md"
- paths: the globs the task may change, inside the role's paths or on the open list. Quote each one, as above.
- depends_on: the issues that must be closed before the task can be taken, such as [12, 15], or [].
- acceptance_tests: at least one test file or test id that proves the task. `hackwin ship` runs them with the test command of hackwin.yml, "npm test --", followed by the tests.
- deadline: the end of the event, which setup wrote. Write an earlier time in the same form when the task is due sooner.
-->
```yaml
# hackwin:task
kind: task                 # task | proposal | integration | contract-change | foundation
role:                      # ownership role: shared, counter, todos or greeting
wave:                      # wave number; optional for tasks written by hand and for proposals
paths:                     # allowed paths, globs, inside the role's scope or on the open list
  -
depends_on: []             # issue numbers
acceptance_tests:
  -                        # test file or test id
deadline: "2026-10-25T09:00:00+01:00"   # ISO 8601 with offset; the end of the event by default
```

## Problem
<!-- What is missing or wrong, in terms of the product. -->

## Expected result
<!-- What exists when the task is done, including the interfaces it must respect. -->

## Acceptance criteria
<!-- One line per criterion, each mapped to a test listed above. -->

## Out of scope
<!-- What this task must not change. -->

<!--
Example of a filled task for this team, not part of this task: delete it before you create the issue. HackWin does not read it.

Title: counter: a first working version

kind: task
role: counter
wave: 1
paths:
  - "src/features/counter/**"
depends_on: []
acceptance_tests:
  - "src/features/counter/first-version.test.js"
deadline: "2026-10-25T09:00:00+01:00"

## Problem
The counter part does not work yet, so the demo cannot show it.

## Expected result
A first working version of the counter part, built against the types and the mocks of the contracts in docs/hackwin/spec.md.

## Acceptance criteria
- "src/features/counter/first-version.test.js": the counter part works with the mock data.

## Out of scope
Every path outside the paths above, and the contracts.
-->
<!-- hackwin:end -->
