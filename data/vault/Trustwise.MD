Tags: AI Safety / Trust, Sourced, Series A, Presented to IC, Not Invested

Company Name: Trustwise
Brief Description: AI Trust Management & Runtime Security — small language model-powered platform for observing, controlling, and aligning the behavior of AI agents in enterprise environments

## Summary
Trustwise is a B2B AI safety and security company founded in 2022 and headquartered in Austin, Texas. The company provides the Harmony AI platform, a runtime trust layer and "AI Control Tower" for enterprises deploying fleets of generative and agentic AI systems. Using proprietary tuned small language models (SLMs), Trustwise embeds "trust as code" directly into AI systems to detect hallucinations, prevent data leakage, enforce compliance, and control agent behavior in real time — across any model, agent framework, or cloud.

## Team
Trustwise was founded in 2022 by Manoj Saxena, a serial entrepreneur and one of the most prominent figures in the enterprise AI and responsible AI ecosystem.

* Manoj Saxena, Founder, CEO & Chairman — Often referred to as the "father of IBM Watson," Saxena served as the first General Manager of IBM Watson (2011–2014), where his team built the first cognitive systems and helped secure a $1B investment from IBM to form the Watson Business Group. Prior to IBM, founded and served as CEO of two venture-backed software companies, both of which were acquired — one by Commerce One and one by IBM — within a five-year span. Subsequently served as Executive Chairman of CognitiveScale (acquired by Tecnotree), Chairman and Board Member of SparkCognition, and co-founder of Bridgeweave (acquired by Prime Securities). Served as Chairman of the Board of the U.S. Federal Reserve Bank of Dallas, San Antonio for six years. Founded the Responsible AI Institute, a nonprofit dedicated to certification of trustworthy and ethical AI, and teaches a course on design of ethical AI systems at the University of Texas at Austin. Fellow contributor at Cambridge University. MBA in Marketing & Strategy from Michigan State University; MMS from Birla Institute of Technology and Science, Pilani

## Problem
Over 80% of enterprise AI projects fail to scale — not because the models lack capability, but because organizations cannot trust, control, or govern the AI systems they deploy. This "Trust Gap" is widening rapidly as agentic AI introduces fundamentally new categories of risk.

* Traditional AI produced outputs that could be reviewed by humans; agentic AI systems plan, decide, and act autonomously, creating a new class of "insider threat" where AI agents can overspend, leak data, misuse tools, or drift from enterprise policies without human oversight
* Existing guardrail and safety solutions are largely reactive — they discover risk after the fact rather than preventing it before impact. Post-hoc monitoring is insufficient when agents are taking consequential actions in real time across financial, healthcare, and industrial workflows
* Enterprises operating in regulated industries (banking, healthcare, insurance) face an acute version of this challenge: they must demonstrate compliance with frameworks like ISO 42001, NIST, the EU AI Act, HIPAA, and FCA guidelines, but have no systematic way to enforce these policies at runtime across fleets of AI agents
* The explosion of agent frameworks (LangGraph, AutoGen, CrewAI), foundation models (GPT-4o, Claude, Gemini, Llama, Mistral), and multi-cloud infrastructure means the attack surface is fragmented and growing, requiring a vendor- and model-agnostic trust layer
* AI costs and sustainability are also governance concerns — without optimization, enterprises face ballooning token spend and carbon emissions that undermine the economic case for AI adoption at scale

## Product
Trustwise provides the Harmony AI platform, an enterprise-grade runtime trust layer that transforms what the company calls "Naked Agents" (unprotected AI) into "Shielded Agents" through six modular AI Shields:

* MCP Shield — Secures agent-tool execution using Model Context Protocols to block tool misuse and unauthorized automation
* Prompt Shield — Prevents prompt injection attacks, hallucinations, and off-policy outputs through dynamic prompt-level safeguards
* Compliance Shield — Aligns AI behavior with 17 global standards including ISO 42001, NIST Risk Management Framework, EU AI Act, HIPAA, and FCA
* Brand Shield — Maintains brand tone, persona, and use case discipline across all agent outputs
* Cost Shield — Optimizes token consumption and compute costs across AI operations
Carbon Shield — Monitors and reduces the environmental footprint of AI workloads

The shields are powered by the proprietary Trustwise AI-SPM (AI Security Posture Management) Engine, which combines industry-specific red-teaming datasets, 12 tuned small language models engineered for low-latency performance, 21 million synthetic personas, 20,000+ red team prompts, 30 guardrail modules, and over 1,100 mapped controls from OWASP, ISO, NIST, and the EU AI Act. The use of purpose-built SLMs rather than large foundation models for the observation and enforcement layer is a key architectural choice — it enables real-time, low-latency inspection of agent actions without the cost or latency overhead of routing everything through a large model.
The platform is delivered through APIs, SDKs, MCPs, and Guardian Agents, and integrates with major agent frameworks (LangGraph, AutoGen, CrewAI, LangChain), foundation models (GPT-4o, Claude, Gemini, Llama 3, Mistral), and infrastructure (AWS, Azure, GCP, on-premises, and edge). Trustwise is SOC 2 compliant and offers single-tenant deployments for sensitive environments. Named customers include KPMG, NHS, Lloyds Banking Group, LPL Financial, and Yum! Brands. The company was named a 2025 Gartner Cool Vendor in Agentic AI for Banking and Investment Services.

## Outcome
I was genuinely excited about Trustwise for several reasons:

* Stellar founder: Manoj Saxena is an exceptionally seasoned entrepreneur — a 4x+ founder with two prior exits (to Commerce One and IBM), deep operating experience at the highest levels of enterprise AI (first GM of IBM Watson), institutional credibility (Chairman of the Federal Reserve Bank of Dallas, San Antonio), and deep ties in the trust and responsible AI space through his founding of the Responsible AI Institute. His technical background and network in the trust ecosystem are difficult to replicate
* Innovative SLM-based architecture: Rather than relying on large foundation models to police other large models, Trustwise's application of purpose-built small language models to observe the different aspects and consequences of AI agent actions is a compelling and differentiated architectural choice. The SLM approach enables real-time, low-latency enforcement at the decision layer — where risk actually originates — without the cost or performance penalties of routing enforcement through heavy models. This "inside-out" safety philosophy felt genuinely novel

That said, the partnership ultimately did not invest due to concerns identified during the diligence process around competitive dynamics and the lack of enterprise traction and market share at the time of evaluation. The AI safety and governance space is crowded and rapidly evolving, with well-funded and emerging challengers as well as features being built natively into the major foundation model providers and cloud platforms. While Trustwise had notable pilot relationships with blue-chip names (Lloyds, NHS, LPL Financial), the depth of contracted enterprise revenue and market penetration did not yet provide sufficient confidence relative to the intensity of competition.