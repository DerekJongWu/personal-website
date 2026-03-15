Tags: AI Infrastructure / LLM Optimization, Sourced, Seed, Presented to IC, Not Invested

Company Name: Not Diamond
Brief Description: Multi-Model AI Optimization Layer — intelligent routing, prompt adaptation, and agent optimization infrastructure for enterprises deploying across a fragmented and constantly evolving foundation model landscape

## Summary
Not Diamond is a B2B AI infrastructure company founded in 2024 and headquartered in San Francisco, California. The company provides the optimization layer for enterprise AI, enabling developer teams to automatically route queries to the best-suited foundation model, adapt prompts across model releases, and optimize multi-step agent workflows — delivering up to 50%+ accuracy gains, 40x faster development cycles, and 100x cost savings. Not Diamond is used by frontier AI teams at SAP, IBM, Snowflake, DoorDash, Dropbox, American Express, Notion, and others.

## Team
Not Diamond was founded in 2024 by a technically elite team with deep roots in AI research and systems engineering, backed by an extraordinary roster of angel investors from across the AI ecosystem.

* Tomás Hernando Kofman, Co-Founder & CEO — Leads company strategy and go-to-market. Brings experience in AI infrastructure and enterprise technology
* Jeffrey Akiki, Co-Founder & COO — Oversees operations and business development
* Tze-Yang Tung, Co-Founder & CTO — Leads engineering and research

The founding team's credibility is underscored by their seed round investors, which include Jeff Dean (Google Chief Scientist), Julien Chaumond (Hugging Face), Zack Kass (OpenAI), Ion Stoica (Anyscale, Databricks), Tom Preston-Werner (GitHub), Scott Belsky (Adobe), and Jeff Weiner (LinkedIn).

## Problem
As enterprises move from single-model AI deployments to multi-model architectures, they face a rapidly compounding infrastructure gap: no scalable way to select the right model, optimize prompts across releases, or ensure consistent performance as the foundation model landscape evolves.

* General intelligence capabilities across foundation models are converging and becoming increasingly commoditized, but each new model release showcases better capabilities in specific areas — meaning a combination of models routed intelligently would consistently outperform any single model deployed monolithically
* Enterprises deploying generative AI applications must choose between dozens of foundation models (GPT-4o, Claude, Gemini, Llama, Mistral, and others), each with different cost, latency, and accuracy profiles. Manual model selection is guesswork; static selection leaves performance on the table
* Prompt engineering — the painstaking process of crafting inputs to elicit optimal model outputs — is manual, fragile, and does not transfer across models. When a new model version is released, prompts that worked on the previous version may degrade significantly, forcing engineering teams into costly re-optimization cycles
* As AI agents become more autonomous and multi-step, the optimization challenge compounds: agent trajectories involve sequences of model calls where each routing and prompting decision cascades through downstream steps
* Enterprise AI teams are spending thousands of engineering hours on manual prompt tuning and model evaluation that could be automated, creating a significant drag on development velocity and time to production
* The result is that most enterprises are underutilizing the model landscape — paying more than necessary, achieving less accuracy than available, and moving far slower than the pace of model innovation demands

## Product
Not Diamond provides a three-layer optimization platform for enterprise AI, designed to be stack-agnostic and integrate with existing orchestration gateways, models, and evaluation pipelines:

* Intelligent Routing — An ultra-low-latency runtime optimization that predicts which foundation model to use for each input, maximizing accuracy while offering dynamic cost and latency tradeoffs. By combining multiple LLMs into a "meta-model" that learns when to route a given query to a specific model, Not Diamond consistently outperforms every individual model — creating what is effectively a model-of-models. The router personalizes decisions to each developer's data and use case
* Prompt Adaptation — An agentic system that automatically rewrites and optimizes static prompt templates across any model and any provider, replacing days of manual prompt engineering with minutes of background processing. Critically, Prompt Adaptation ensures that when a new model version is released (e.g., moving from Claude Opus 4.5 to Opus 4.6), prompts are automatically adapted to maintain equivalent or improved performance on the new release — eliminating the costly re-engineering cycle that model transitions currently impose
* Agent Optimization — Leverages self-improving algorithms to optimize multi-step workflows and autonomous agents, dramatically improving success rates over long-running agent trajectories where each routing and prompting decision cascades through downstream steps

The platform is delivered via a secure API and supports VPC deployments. Not Diamond is SOC 2 and ISO 27001 compliant and offers zero data retention (ZDR) policies. Integrations are stack-agnostic, supporting existing orchestration gateways, models, and evaluation pipelines. The Prompt Adaptation system has been integrated into SAP's generative AI hub, where it automatically adapts enterprise prompts to the best available model — reducing manual effort, accelerating adoption of new models, and ensuring optimal performance across geographies and regulatory zones.

## Outcome
I was genuinely excited about Not Diamond for several reasons:

* Macro thesis on model agnosticism: Not Diamond is banking on a world where enterprises are model-agnostic — and the evidence increasingly supports this bet. As general intelligence capabilities between foundation models continue to converge and become fairly commoditized, each new model release showcases better capabilities in specific areas. A platform that intelligently combines these models to achieve the greatest possible offering across cost, latency, and accuracy is a structurally compelling position to build from
* Multi-product platform potential: The prompt routing product offered real cost metrics and showcased the greater performance enterprises could achieve, which is valuable as more organizations deploy genAI applications at scale. The Prompt Adaptation product addressed a particularly acute pain point — ensuring that prompts can be adapted across different model releases (e.g., if a prompt performs a specific way for Opus 4.5, making sure it performs equivalently for Opus 4.6) without manual re-engineering. Together, these products form the foundation for what could become a complete inference optimization platform
* Strategic enterprise traction: Not Diamond had achieved meaningful enterprise traction with both SAP and IBM — two of the most significant enterprise AI platforms globally. SAP was using Not Diamond for customer-facing AI use cases and had embedded the technology into the SAP generative AI hub platform to help develop and optimize AI models. IBM joined as both a customer and an investor, validating the technology from both a product and a capital perspective

That said, the partners ultimately were not comfortable with the round dynamics — specifically, too little allocation was available for the partnership to participate at a meaningful size.