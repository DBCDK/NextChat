# SkoleGPT

_Mainly quick internal notes, but added here for documentation, if merging upstream._

Goals/consideration:

- Follow/customized to the needs of SkoleGPT (primary use case)
- Keep code as mergable as possible with upstream NextChat (reduces maintenance long-term)
- Make changes configurable/general/togglable, such that changes has the possibility to be pushed upstream (reduces maintenance long-term)
- **Long-term goal/vision:** Hopefully ChatBib and SkoleGPT can merge to a single codebase, that also can be use for other DBC-chat-solutions (Such as internal DBC-chat, as suggested on innovation day, or new products). This would also mean that features developed on one solution, would benefit other solutions.

Why based on NextChat-main instead of ChatBib 1.0

- NextChat had diverged from ChatBib, and bringing ChatBib up to date to latest NextChat, would be extra work beyond the scope of SkoleGPT
- New llm.dbc.dk standard-based api, makes it possible to talk with our LLMs, without leaking details about internal setup, making it easier to push upstream. 


### Implementation/change details:

To avoid large diffs and merge-conflicts due to code reformatting, development happens in two branches:

- `skolegpt-base` with changes that doesn't cause large code reformatting.
- `skolegpt` with the commit-reformatting-hook disabled for changes that would reformat large parts of existing code (such as disabling a feature by wrapping it in a if-clause, etc.), using `skolegpt-base` as base branch.

Usually changes just happens `skolegpt-base`, which are then merged into the `skolegpt`.

---

Features are configured/enabled through `NEXT_PUBLIC_...` environment variables.

---

A (quick) code review has been done, adding feature-toggles to remove google-analytics, so when updating to upstream, remember to review upstream changes before merging.

---

As the browser-client talks directly to llm.dbc.dk, the NextJS-backend is only used to send config to the client etc. and is firewalled to disallow outgoing connections (both for internal and external network).