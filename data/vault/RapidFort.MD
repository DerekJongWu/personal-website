Tags: Cybersecurity, Diligenced, Series A, Presented to IC, Not Invested 

Company Name: RapidFort
Brief Description: Software Supply Chain Security — automated CVE remediation and container hardening at machine speed

### Summary
RapidFort is a B2B cybersecurity company founded in 2020 and headquartered in Sunnyvale, California. The company provides a software supply chain security platform that automatically remediates up to 95% of CVEs (Common Vulnerabilities and Exposures) without requiring code changes, pipeline modifications, or OS-level changes.

### Team
RapidFort was founded in 2020 by a team of cybersecurity veterans. The company quietly matured its technology through early work with U.S. defense agencies before pushing aggressively into the commercial market.

* Mehran Farimani, CEO & Founder — Previously founder and CEO of Percipio, an AI-focused human-computer interaction company, where he spent more than 11 years scaling technical products
* Rajeev Thakur, CTO — Leads engineering and platform development
* Russ Andersson, COO — Oversees operations
* George Manuelian, CRO — Drives revenue and go-to-market strategy

### Problem
Modern software is overwhelmingly composed of third-party and open-source components, and the volume of CVEs is growing faster than security and engineering teams can address them.

* The traditional vulnerability management process is deeply manual: teams must identify each vulnerability, research its root cause, prioritize it against other work, and then patch it — all while release timelines compress
* AI has simultaneously accelerated software delivery and lowered the barrier for attackers, collapsing the window between vulnerability disclosure and exploitation
* Organizations know they have vulnerabilities but structurally cannot fix them fast enough
* Existing tools are largely detection-oriented, producing long lists of issues that overwhelm developers and delay shipping — there is no scalable, automated path from identification to actual remediation

### Product
RapidFort offers an end-to-end Software Attack Surface Management (SASM) platform built around three integrated capabilities:

* DevTime Protection Tools — Scan and instrument container images anywhere (registry, inline, or runtime), generating audit-ready Software Bill of Materials (SBOM) and a proprietary Runtime Bill of Materials (RBOM™) that captures what components are actually executed versus merely present
* Curated Near-Zero CVE Images — A catalog of over 25,000 hardened container images across major LTS Linux distributions (Ubuntu, Alpine, Red Hat, Debian), built daily, FIPS 140-3 validated, and STIG/CIS benchmarked — drop-in replacements that reduce exposure without rewriting applications
* RunTime Protection Tools — Harden production workloads by analyzing actual execution paths and stripping unused components, reducing attack surface by up to 90% with less than 1% compute overhead

The platform integrates directly into existing CI/CD workflows and tech stacks (GitHub, Jira, Splunk, Slack, Tenable, and others) and supports compliance acceleration for FedRAMP, CMMC, cATO, SOC 2, and NIS2. RapidFort's approach is open-source based with no vendor lock-in.

### Outcome
I was genuinely excited about RapidFort for several reasons:

* GTM evolution: After initially going to market through government channels, they pivoted to a direct enterprise sales motion and gained enormous traction as a result — a testament to both the breadth of the problem and the team's ability to adapt
* Technical differentiation: Rather than adding yet another detection layer, RapidFort actually removes vulnerabilities automatically, which is a fundamentally more defensible position than most players in the space
* Competitive advantage over Chainguard: Unlike Chainguard, which requires customers to adopt Wolfi as their base OS, RapidFort works across standard LTS distributions with no vendor lock-in — a meaningful advantage in lowering enterprise adoption friction
* Federal validation: Early and deep traction with U.S. defense agencies added significant conviction around both product maturity and go-to-market credibility

That said, the partnership ultimately could not get comfortable with the pricing of the Series A to participate as a co-lead. In February 2026, RapidFort closed a $42M Series A led by Blue Cloud Ventures and Forgepoint Capital, with re-participation from existing investor Felicis Ventures and additional backing from Alumni Ventures, Boulder Ventures, Brave Capital, Evolution Ventures, Florida Funders, Gaingels, and Mana Ventures. Total funding raised to date stands at approximately $53M, inclusive of an $8.5M seed round in June 2022. The company will use the proceeds to scale go-to-market operations, advance platform development, and deepen its presence in regulated industries.