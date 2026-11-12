<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Token discipline (mandatory)

Har task ka goal: minimal context, direct fix. Target ~2% context per task.

1. **Scope:** sirf `src/`, `public/`, `AGENTS.md`, config files. `node_modules/`, `.next/`, lockfiles, ya build output kabhi read/glob na karo. (`node_modules/next/dist/docs/` sirf tab jab Next.js API badalni ho — ek targeted file ya `grep`, poora file nahi.)
2. **Read budget:** koi bhi file 60+ lines ho to pehle `grep -n` se location dhundo, phir `read` with `offset`/`limit` (~60 lines max). Poori file sirf tab jab wo chhoti ho ya poora content hi chahiye.
3. **Discovery:** pehle `src/`-scoped `glob`/`grep`; root se broad glob (jaise `**/*header*`) na karo. Independent reads ek hi message mein parallel bhejo.
4. **No re-reads:** session mein already read file dobara na padho, sirf apni edit ke baad verify ke liye targeted lines.
5. **Visual bugs:** screenshot/render ke bagair guess na karo — ek dafa `ask_user_question` se screenshot ya exact element pooch lo, phir seedha fix.
6. **Shell failures:** koi command 2 baar fail ho to retry band karo; reason report karo aur static analysis ya user input par chale jao. Alag alag workarounds try na karo.
7. **Answers:** chhote bullets — kya tha, kya badla, kaunsi file/line. Lambi explanations aur repeated summaries na do.
8. **No gold-plating:** sirf reported issue fix karo; unrelated refactors ya extra features na add karo.

