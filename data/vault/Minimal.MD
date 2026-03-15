Tags: Developer Tools / Infrastructure, Diligenced, Seed, Presented to IC, Not Invested

Company Name: Minimal
Brief Description: Secure Reproducible Environments — declarative, microVM-powered platform for composing isolated dev, agent, and CI environments that are dramatically faster and more secure than Docker

## Summary
Minimal is a B2B developer infrastructure company based in Canada, currently in early access. The company provides a declarative build system that composes secure, reproducible software environments using microVM-based isolation — delivering 13x faster cold starts, 100x faster dependency installs, and 80% leaner storage than Docker. Built from the ground up in Rust, Minimal targets a fundamental re-architecture of how developers, AI agents, and CI pipelines create and execute sandboxed environments.

## Team
Minimal was founded by Jake King, a deeply technical security practitioner and repeat founder with a track record of building and exiting infrastructure security companies.

* Jake King, Founder & CEO — Previously co-founded Cmd, a Linux runtime security company that provided infrastructure detection and response (IDR) for cloud workloads using eBPF technology. Cmd raised $23.2M (including a $15M Series B led by GV/Google Ventures), served global brands and financial institutions, and was acquired by Elastic (NYSE: ESTC) in 2021, where King subsequently served as Tech Lead. Cmd was named to Forbes' "20 Best Cybersecurity Startups to Watch in 2020" and CNBC's 2019 Upstart 100. Prior to founding Cmd, King led security operations at Hootsuite, where he experienced firsthand the challenges of securing Linux systems at scale. An Australian native, King studied cyber forensics and information security management before relocating to Vancouver, Canada. Frequent speaker on Linux and cloud security at BSides, MITRE, RSA, and other conferences

## Problem
The foundational tooling that developers rely on to create, manage, and secure their software environments is slow, fragile, and architecturally outdated — creating a cascading drag on development velocity, security posture, and the emerging agentic AI workflow.

* Docker, the de facto standard for containerized environments, suffers from slow cold starts, daemon dependencies, and a shared-kernel architecture that offers only partial isolation — creating a meaningful attack surface for security-sensitive workloads
* Containers traded determinism for portability: developers routinely encounter environment drift between local, CI, and production, leading to "works on my machine" failures that consume engineering time and delay releases
* Nix-based alternatives (Flox, devenv) achieve correctness and reproducibility but at the cost of significant complexity — steep learning curves and opaque configuration make adoption prohibitive for most engineering teams
* Package managers provide no guarantees around parity: versioning does not equal reproducibility, and teams cross their fingers that what runs locally will behave identically in CI and production
* The rise of AI coding agents introduces a new and urgent requirement: agents need sandboxed, reproducible environments they can spin up instantly and trust to behave deterministically. Existing tooling was not designed for this use case, and the lack of strong isolation creates security risks when agents execute arbitrary code
* Across all of these workflows, there is no single system that delivers reproducibility, strong isolation, speed, simplicity, and provenance tracking in a unified package

## Product
Minimal provides a declarative environment platform built from scratch in Rust, centered on microVM-based isolation and a global prebuilt package cache:

* MicroVM-Powered Isolation — Every Minimal environment runs in a secure microVM sandbox, providing hardware-level isolation rather than the shared-kernel approach of containers. This delivers VM-grade security boundaries with container-like performance: 13x faster cold starts than Docker, booting secure sandboxes in seconds
* Declarative Configuration in Nickel — Environment specifications are written in Nickel, a configuration language designed for correctness, and travel with the repository. Version-locked build specs ensure identical configurations across local development, CI, and agent-executed workflows — eliminating environment drift by construction
* Prebuilt Package Cache — Dependencies are resolved in sub-seconds through a global cache of prebuilt, vetted packages, achieving 100x faster installs and 80% leaner disk usage through shared global caching. Every dependency used in a Minimal environment is vetted, enabling automatic SBOM and attestation generation
* Full Stack Visibility & Provenance — Surfaces end-of-life warnings, license conflicts, and security risks before code ships. One governance model across every language and framework, with complete provenance tracking that package managers ignore
* Agent-Ready Architecture — Designed explicitly for a world where developers, AI agents, and CI pipelines all need the exact same sandboxed environment. Strong isolation ensures safe execution of agent workloads without interference or security risk
* CI Runner Integration — Native GitHub Actions integration delivering 3x faster builds through declarative, GitHub-native hosted runners with full traceability

The platform supports polyglot development across C, C++, Rust, Python, Java, Go, JavaScript, TypeScript, and Shell. It installs as a single binary with no daemon, no runtime, and no dependencies, and supports Linux (x86-64 and ARM64) and macOS (ARM64). Minimal is not a Nix wrapper — it was purpose-built in Rust for performance, provenance-driven security, and declarative simplicity.

## Outcome
I was genuinely excited about Minimal for several reasons:

* Founder quality: Jake King brought deep technical experience with a clear understanding of both software development workflows and security. His track record of co-founding Cmd, scaling it to serve global brands and financial institutions, and successfully exiting to Elastic (NYSE: ESTC) gave strong conviction that this was a builder who understood how to take infrastructure security products from zero to meaningful enterprise adoption
* Exceptional product execution: I was extremely impressed by the product. The use of advanced machine learning techniques to create secure software containers and images, combined with the microVM-based isolation architecture, represents a genuinely novel approach to environment security. The speed at which Minimal is able to spin up new environments — 13x faster cold starts and 100x faster dependency resolution compared to Docker — was a standout demonstration of technical excellence
* Speed to create secure base environments locally: The ability to compose secure, reproducible environments locally at dramatically faster speeds than Docker addresses a real and growing pain point, particularly as AI agents increasingly need sandboxed execution environments they can trust

That said, the partnership ultimately did not execute the investment due to round dynamics and a lack of conviction on near-term use cases in the financial services space. While the technology was impressive, the path to adoption within the regulated enterprise environments most relevant to our portfolio required additional validation.