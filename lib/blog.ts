export type Category =
  | "Cybersecurity"
  | "AI & Automation"
  | "Knowledge Intelligence"
  | "Data Management"
  | "Enterprise Technology";

export type SectionType =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "insight" | "warning" | "tip"; content: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: Category;
  readTime: number;
  author: string;
  authorRole: string;
  featured?: boolean;
  body: SectionType[];
};

export const posts: BlogPost[] = [
  {
    slug: "cert-in-6-hour-reporting-what-enterprises-must-do",
    title: "CERT-In's 6-Hour Reporting Mandate: What Your IT Team Must Do Before the Next Incident",
    date: "2026-06-15",
    excerpt:
      "India's CERT-In directive requires enterprises to report cybersecurity incidents within 6 hours. Most IT teams are not prepared. Here is a practical guide to meeting the mandate — and what happens if you don't.",
    category: "Cybersecurity",
    readTime: 8,
    author: "Cognexa Security Team",
    authorRole: "Surakshitam Platform",
    featured: true,
    body: [
      {
        type: "paragraph",
        content:
          "In April 2022, India's Computer Emergency Response Team (CERT-In) issued a directive that changed the compliance landscape for every enterprise operating in the country. The mandate: report cybersecurity incidents to the government within six hours of detection. Not 24 hours. Not 72 hours. Six.",
      },
      {
        type: "paragraph",
        content:
          "Two years on, a large number of Indian enterprises still do not have a structured process that meets this requirement. Many have awareness of the rule — but awareness and operational readiness are not the same thing. When an incident occurs at 2 AM on a Sunday, the clock starts ticking regardless of who is awake.",
      },
      {
        type: "heading",
        level: 2,
        content: "What the CERT-In Mandate Actually Requires",
      },
      {
        type: "paragraph",
        content:
          "The directive covers a broad range of incidents, including data breaches, ransomware attacks, identity theft, DDoS attacks, website defacements, unauthorised access to IT systems, and attacks on critical infrastructure. If any of these occur within your environment — or within a third-party system you operate — you are required to report it to CERT-In within six hours.",
      },
      {
        type: "list",
        items: [
          "Report within 6 hours of detecting the incident — not within 6 hours of confirming it",
          "Maintain logs for 180 days and provide them to CERT-In upon request",
          "VPN and cloud service providers must collect and store subscriber data for 5 years",
          "All ICT systems must synchronise clocks with NTP servers of NIC or NPL",
          "Non-compliance attracts penalties under the IT Act, 2000",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "The 6-hour clock starts from detection — not from confirmation or investigation. If your monitoring tool raises an alert at 11 PM, the reporting deadline is 5 AM. Your on-call process needs to be able to file a report while the investigation is still underway.",
      },
      {
        type: "heading",
        level: 2,
        content: "Why Most Enterprises Are Not Ready",
      },
      {
        type: "paragraph",
        content:
          "We have assessed the security posture of dozens of Indian enterprises across BFSI, manufacturing, and healthcare over the past two years. The gap we see most consistently is not technical — it is procedural. The detection capability often exists. What is missing is a documented, tested process that turns a detection event into a filed report within six hours.",
      },
      {
        type: "list",
        items: [
          "Alert fatigue: monitoring tools generate hundreds of alerts daily, making genuine incidents hard to identify quickly",
          "No defined owner: it is unclear who has authority to file a CERT-In report at 2 AM",
          "Poor log centralisation: pulling the required incident data from disparate systems takes hours",
          "Lack of a pre-approved report template: writing the report from scratch under time pressure leads to errors and delays",
          "No tested runbook: the process has never been rehearsed, so it breaks under real-world conditions",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "A 5-Step Framework for 6-Hour Compliance",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 1: Define what constitutes a reportable incident",
      },
      {
        type: "paragraph",
        content:
          "Not every security alert is a CERT-In reportable incident. Document a clear classification matrix that maps alert types to reporting obligations. Your SOC team should be able to apply this without escalating to legal counsel at 3 AM.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 2: Assign a 24/7 reporting owner",
      },
      {
        type: "paragraph",
        content:
          "Designate an incident reporting officer with authority to file reports. Create an on-call rotation. Ensure this person has direct access to CERT-In's reporting portal and a pre-populated report template with your organisation's details.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 3: Centralise your logs",
      },
      {
        type: "paragraph",
        content:
          "CERT-In will ask for logs. If those logs are spread across firewall management consoles, endpoint agents, cloud portals, and application servers, you will not be able to compile them in time. A SIEM or centralised log management system is not optional — it is what makes the 6-hour window achievable.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 4: Build and automate the runbook",
      },
      {
        type: "paragraph",
        content:
          "A compliance runbook for CERT-In reporting should include: detection trigger criteria, initial containment steps, log collection procedure, report filing steps, internal notification chain, and evidence preservation protocol. With automation, steps 1-3 can execute in minutes rather than hours.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 5: Drill it quarterly",
      },
      {
        type: "paragraph",
        content:
          "A runbook that has never been tested is a plan on paper. Run a tabletop exercise every quarter. Inject a simulated incident on a Friday evening. See how long it takes your team to reach the reporting stage. Compress that time with each drill.",
      },
      {
        type: "callout",
        variant: "insight",
        content:
          "Organisations using automated runbooks for incident response consistently reduce their mean time to report by 65-80% compared to manual processes. The investment in automation pays for itself the first time you face a real incident.",
      },
      {
        type: "heading",
        level: 2,
        content: "How Surakshitam Addresses This",
      },
      {
        type: "paragraph",
        content:
          "Cognexa's Surakshitam platform integrates Kavach (managed firewall), Durg (continuous vulnerability scanning), and our 24/7 security operations team into a single managed service. For CERT-In compliance specifically, Surakshitam provides pre-built incident classification matrices, automated log centralisation, a maintained CERT-In report template, and a tested escalation runbook — all included in the standard deployment. Clients have used this to file accurate CERT-In reports within 90 minutes of detection.",
      },
      {
        type: "paragraph",
        content:
          "If you are not currently certain your team could file a complete CERT-In report within six hours of a major incident, that is the right starting point for a conversation. The penalty for non-compliance is real. More importantly, the damage from an incident that is not contained quickly is worse.",
      },
    ],
  },

  {
    slug: "private-llm-vs-cloud-ai-why-enterprise-data-must-stay-on-premise",
    title: "Private LLM vs Cloud AI: Why Your Enterprise Data Must Never Leave Your Infrastructure",
    date: "2026-06-10",
    excerpt:
      "Using ChatGPT or public AI tools with internal company data is a security and compliance risk most enterprises have not fully reckoned with. Here is what your legal, IT, and HR teams need to understand — and what the alternative looks like.",
    category: "Knowledge Intelligence",
    readTime: 7,
    author: "Cognexa AI Team",
    authorRole: "Vidya AI Platform",
    featured: true,
    body: [
      {
        type: "paragraph",
        content:
          "There is a conversation happening in most Indian enterprises right now, usually between an enthusiastic department head and a cautious IT or legal team. The department head has discovered that ChatGPT, Copilot, or Gemini can summarise documents, answer policy questions, and draft responses in seconds. The IT team is uncomfortable, but cannot articulate exactly why. The legal team is worried but hasn't had time to investigate.",
      },
      {
        type: "paragraph",
        content:
          "This article is for both sides of that conversation. The risk is real, specific, and solvable. But solving it does not mean banning AI — it means deploying it properly.",
      },
      {
        type: "heading",
        level: 2,
        content: "What Actually Happens When You Paste Company Data into ChatGPT",
      },
      {
        type: "paragraph",
        content:
          "When an employee pastes an internal HR policy, a customer contract, financial data, or a sensitive SOP into ChatGPT or any public AI service, that data is transmitted to and processed by servers owned by a foreign corporation — typically in the United States. Depending on the service's terms and your account type, that data may be used to train future model versions. Even with a paid enterprise tier, the data is processed outside your control.",
      },
      {
        type: "list",
        items: [
          "Personal data processed by foreign AI services may violate India's Digital Personal Data Protection (DPDP) Act, 2023",
          "Sensitive financial or strategic data transmitted to third-party servers creates contractual and fiduciary exposure",
          "Data used for model training could, in theory, surface in responses to other users",
          "You have no control over how the data is stored, for how long, or who has access to it",
          "RBI-regulated entities have explicit restrictions on data residency and third-party data sharing",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Under the DPDP Act, 2023, processing personal data of Indian citizens outside India requires specific safeguards. An employee's attendance record, performance data, or medical information in your HR system — pasted into ChatGPT — is a potential DPDP violation.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Business Case for a Private Knowledge Assistant",
      },
      {
        type: "paragraph",
        content:
          "The reason employees reach for public AI tools is legitimate: they want faster access to information. An HR executive spending 40% of her day answering policy questions is not being inefficient — she is working with an inadequate system. The answer is not to remove the tool. It is to give employees a better tool that is safe.",
      },
      {
        type: "paragraph",
        content:
          "A private knowledge assistant — deployed on your own servers using an open-source or licensed LLM — delivers the same capability with a fundamentally different data posture. The model runs inside your network. Queries stay inside your network. Responses stay inside your network. Nothing leaves.",
      },
      {
        type: "table",
        headers: ["Dimension", "Public Cloud AI (ChatGPT etc.)", "Private LLM (Vidya AI)"],
        rows: [
          ["Data residency", "Foreign servers (US/EU)", "Your own infrastructure"],
          ["DPDP Act compliance", "Requires specific safeguards", "Compliant by architecture"],
          ["Training data risk", "Possible (depends on tier)", "Zero — isolated model"],
          ["Access control", "Limited", "Role-based, audit-logged"],
          ["Multi-language", "Limited Hindi/regional support", "Full Hindi + regional"],
          ["Integration with internal docs", "Manual paste only", "Direct index of systems"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "What 'Local LLM' Actually Means",
      },
      {
        type: "paragraph",
        content:
          "A local LLM is a language model running on hardware you control — either on-premise servers in your data centre, or on a private cloud instance that no one else can access. The model has been indexed against your specific documents, so it can answer questions about your policies, not policies in general.",
      },
      {
        type: "paragraph",
        content:
          "When an employee asks Vidya AI 'What is the WFH policy for probationary staff?', the query goes to a model running on your server, which searches your indexed HR documents, and returns a cited answer — with the source file, section, and page number. At no point does that query leave your network.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Practical Objections — and the Answers",
      },
      {
        type: "heading",
        level: 3,
        content: "'We don't have the hardware to run an LLM.'",
      },
      {
        type: "paragraph",
        content:
          "Modern quantised models (like LLaMA 3, Mistral, or Gemma) run efficiently on a single GPU server. For a 500-1,000 employee organisation serving internal knowledge queries, a mid-range enterprise server is typically sufficient. The hardware cost is a one-time capital expense, not a recurring subscription.",
      },
      {
        type: "heading",
        level: 3,
        content: "'Our IT team cannot manage a model deployment.'",
      },
      {
        type: "paragraph",
        content:
          "This is precisely what a managed deployment covers. Cognexa handles model selection, infrastructure setup, document ingestion, access configuration, and ongoing maintenance as part of the Vidya AI implementation. Your IT team does not need AI expertise — they need to provide the server and the documents.",
      },
      {
        type: "heading",
        level: 3,
        content: "'The model won't be as good as ChatGPT.'",
      },
      {
        type: "paragraph",
        content:
          "For answering questions about your specific policies and documents, a properly indexed private model outperforms ChatGPT — because ChatGPT does not have your documents. A model grounded in your actual HR handbook, with source citations and role-based filtering, is strictly more useful than a generic model guessing at policy from general training data.",
      },
      {
        type: "callout",
        variant: "insight",
        content:
          "Organisations deploying Vidya AI consistently report that employees prefer it over searching SharePoint or emailing HR — not because it is smarter than ChatGPT, but because it knows their specific policies and cites its sources.",
      },
    ],
  },

  {
    slug: "aiops-reduce-mttr-enterprise-operations",
    title: "The Real Cost of Manual Incident Triage — And How AIOps Eliminates It",
    date: "2026-06-05",
    excerpt:
      "Most enterprise IT teams spend 30-40% of their capacity on incident triage that could be automated. AIOps is not a buzzword — it is a measurable reduction in MTTR and operational overhead. Here is the numbers breakdown.",
    category: "AI & Automation",
    readTime: 6,
    author: "Cognexa Automation Team",
    authorRole: "Aurobit Platform",
    body: [
      {
        type: "paragraph",
        content:
          "A large manufacturing company we work with had a simple problem: their IT operations team was receiving an average of 340 monitoring alerts per day. The team had six people. After filtering out noise, roughly 80 genuine incidents required investigation each day. Each took an average of 22 minutes to triage, classify, and route. That is 29 hours of triage work — per day — before any remediation had started.",
      },
      {
        type: "paragraph",
        content:
          "This is not unusual. It is what most enterprise IT environments look like at scale. The monitoring tools are doing their job. The problem is what happens after the alert fires.",
      },
      {
        type: "heading",
        level: 2,
        content: "Calculating the True Cost of Manual Triage",
      },
      {
        type: "paragraph",
        content:
          "Manual incident triage has three cost components that are rarely measured together: direct labour cost, opportunity cost, and delay cost.",
      },
      {
        type: "table",
        headers: ["Cost Component", "How It Manifests", "Typical Enterprise Impact"],
        rows: [
          ["Direct labour", "Engineer hours spent classifying and routing alerts", "25-35% of IT ops capacity"],
          ["Opportunity cost", "Engineers doing triage instead of proactive improvement work", "2-4 fewer projects per quarter"],
          ["Delay cost", "Time between detection and remediation start", "Longer outage windows, SLA breaches"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "What AIOps Actually Does",
      },
      {
        type: "paragraph",
        content:
          "AIOps (Artificial Intelligence for IT Operations) applies machine learning to the events, logs, metrics, and topology data flowing through your monitoring stack. It learns what normal looks like for your specific environment and identifies deviations — including ones that would not trigger a simple threshold alert.",
      },
      {
        type: "paragraph",
        content:
          "But the more immediate value is not prediction — it is automation of the triage loop. Once an incident is detected, an AIOps platform like Aurobit can: classify the incident type, determine severity, identify the probable root cause from historical data, look up the appropriate runbook, execute the remediation steps, notify the right team if human intervention is needed, and log everything for audit. This loop, which takes a human engineer 15-25 minutes, executes in under 90 seconds.",
      },
      {
        type: "callout",
        variant: "insight",
        content:
          "Aurobit customers typically see 80-94% of incidents automatically classified and routed within the first 30 days of deployment, with a 55-65% reduction in mean time to resolution (MTTR) and a corresponding reduction in overnight escalations.",
      },
      {
        type: "heading",
        level: 2,
        content: "Runbook Automation: The Foundation of AIOps ROI",
      },
      {
        type: "paragraph",
        content:
          "Runbooks are the operational knowledge of your IT team encoded as procedures: restart this service, scale this resource, flush this cache, escalate if unresolved in 10 minutes. Every senior engineer has this knowledge. The problem is that it exists in their heads, not in a system — so it is unavailable at 2 AM or when that engineer is on leave.",
      },
      {
        type: "paragraph",
        content:
          "Runbook automation moves this knowledge into the platform, making it executable. When Aurobit detects an API timeout, it does not alert an engineer — it executes the appropriate runbook, attempts resolution, and only escalates if the automated response fails. The engineer sees a resolved incident in the morning log, not a 3 AM PagerDuty call.",
      },
      {
        type: "heading",
        level: 2,
        content: "Predictive Analytics: Catching Incidents Before They Happen",
      },
      {
        type: "paragraph",
        content:
          "The most valuable capability of a mature AIOps deployment is prediction. By analysing trends in metrics — disk growth rate, memory leak patterns, query response degradation, network congestion — the platform can identify conditions that will cause an incident in 4-8 hours and trigger a preventive action before the outage occurs.",
      },
      {
        type: "paragraph",
        content:
          "This shifts the operational model from reactive (fix outages) to proactive (prevent outages). The business impact is significant: scheduled maintenance during low-traffic windows instead of emergency responses during business hours. For e-commerce, payments, or manufacturing operations where downtime has a direct revenue cost, this is transformative.",
      },
      {
        type: "heading",
        level: 2,
        content: "Is Your Organisation Ready for AIOps?",
      },
      {
        type: "paragraph",
        content:
          "AIOps is most impactful when you have: a meaningful volume of alerts (50+ per day), some existing monitoring infrastructure, documented runbooks or institutional knowledge that can be encoded, and clear SLA obligations that downtime affects. If all four apply, the ROI calculation is straightforward.",
      },
      {
        type: "list",
        items: [
          "Start with your top 10 most common incident types and build runbooks for each",
          "Measure your current MTTR across those incident types as a baseline",
          "Deploy automation for those 10 types first — expect 60-70% MTTR reduction within 60 days",
          "Expand to predictive analytics in phase two once the triage automation is stable",
        ],
      },
    ],
  },

  {
    slug: "penetration-testing-vs-vulnerability-scanning-enterprise-guide",
    title: "Penetration Testing vs Vulnerability Scanning: Which Does Your Enterprise Actually Need?",
    date: "2026-05-28",
    excerpt:
      "These two security practices are often confused, frequently conflated in vendor pitches, and sometimes used interchangeably — incorrectly. Here is a clear breakdown of what each does, what each costs, and how to decide what your organisation needs.",
    category: "Cybersecurity",
    readTime: 7,
    author: "Cognexa Security Team",
    authorRole: "Surakshitam Platform",
    body: [
      {
        type: "paragraph",
        content:
          "A vulnerability scan and a penetration test are not the same thing. They are complementary practices that answer different questions at different costs. Understanding the difference is not just an academic exercise — it determines how much you spend, what you learn, and whether your compliance requirements are met.",
      },
      {
        type: "heading",
        level: 2,
        content: "What Vulnerability Scanning Is",
      },
      {
        type: "paragraph",
        content:
          "Vulnerability scanning is an automated process that checks your systems against a database of known vulnerabilities. A scanner — such as Cognexa's Durg — connects to your network, enumerates your assets, and tests each one against tens of thousands of known CVEs (Common Vulnerabilities and Exposures). The output is a list of vulnerabilities, typically with CVSS severity scores and remediation guidance.",
      },
      {
        type: "list",
        items: [
          "Automated — no human attacker, just a tool",
          "Broad — covers your entire asset inventory",
          "Fast — a full network scan completes in hours",
          "Repeatable — can run daily, weekly, or continuously",
          "Cost-effective — priced as a managed service subscription",
          "Tells you: where your known vulnerabilities are",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "What Penetration Testing Is",
      },
      {
        type: "paragraph",
        content:
          "Penetration testing (or pen testing) is a human-led exercise in which a skilled security professional — or a team — attempts to compromise your systems using the same techniques a real attacker would use. It starts where a vulnerability scanner stops: rather than simply identifying that a vulnerability exists, a pen tester attempts to exploit it and determine what damage could actually be done.",
      },
      {
        type: "list",
        items: [
          "Manual — conducted by skilled security engineers",
          "Focused — targets specific systems, applications, or attack surfaces",
          "Slow — a thorough engagement takes days to weeks",
          "Point-in-time — not continuously repeated",
          "Higher cost — priced per engagement or annually",
          "Tells you: what a real attacker could actually achieve in your environment",
        ],
      },
      {
        type: "table",
        headers: ["Dimension", "Vulnerability Scanning", "Penetration Testing"],
        rows: [
          ["Method", "Automated tool", "Human attacker simulation"],
          ["Scope", "Full asset inventory", "Targeted scope"],
          ["Depth", "Known CVEs only", "Chains vulnerabilities, tests logic flaws"],
          ["Frequency", "Continuous or weekly", "Annual or post-change"],
          ["Output", "CVE list with CVSS scores", "Exploitation narrative + impact assessment"],
          ["Cost", "₹60K–2L/month managed", "₹3L–15L per engagement"],
          ["Compliance", "ISO 27001, SOC2 requirement", "PCI-DSS, RBI requirement"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "The Critical Distinction: Known vs Unknown",
      },
      {
        type: "paragraph",
        content:
          "Vulnerability scanners only find what they know about. If a CVE has been published, it will appear in scan results. But real attackers also exploit: logic flaws in custom applications, misconfigurations that are not in any CVE database, chained vulnerabilities that are individually low-risk but catastrophic in combination, and social engineering vectors. None of these appear in a vulnerability scan. Only a pen tester finds them.",
      },
      {
        type: "callout",
        variant: "insight",
        content:
          "In our Shastra penetration testing engagements, approximately 40% of the critical findings we report are not in any CVE database. They are configuration issues, logic flaws, or chained attack paths that no automated scanner would detect.",
      },
      {
        type: "heading",
        level: 2,
        content: "What Compliance Frameworks Require",
      },
      {
        type: "paragraph",
        content:
          "Most compliance frameworks require both, with different frequencies. Understanding which framework applies to your organisation determines your minimum requirement.",
      },
      {
        type: "list",
        items: [
          "PCI-DSS: Quarterly vulnerability scans + annual penetration test (mandatory for all card-handling entities)",
          "ISO 27001: Vulnerability assessments as part of risk management; pen testing recommended",
          "RBI Cybersecurity Framework: Annual VAPT (Vulnerability Assessment and Penetration Testing) for all regulated banks and NBFCs",
          "CERT-In: Periodic VAPT required for critical information infrastructure",
          "SEBI Cybersecurity Circular: Half-yearly VAPT for all registered intermediaries",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "The Recommendation: Start with Continuous Scanning, Add Annual Pen Testing",
      },
      {
        type: "paragraph",
        content:
          "For most enterprises, the right starting point is continuous vulnerability scanning — it gives you ongoing visibility into your risk posture at a manageable cost. Add annual penetration testing (at minimum) to verify that the vulnerabilities your scanner is not finding are not being exploited by real attackers.",
      },
      {
        type: "paragraph",
        content:
          "In the Surakshitam platform, Durg provides continuous scanning and Shastra provides the pen testing engagement. Both are managed by Cognexa's security team, which means the findings from each feed into a unified remediation view rather than two disconnected reports.",
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "If you have never had a penetration test and you handle financial data, customer PII, or operate critical infrastructure — schedule one this quarter. The cost of the exercise is small relative to the cost of discovering what it finds the hard way.",
      },
    ],
  },

  {
    slug: "dpdp-act-2023-enterprise-data-governance-guide",
    title: "India's DPDP Act 2023: What It Means for Your Enterprise Data Governance",
    date: "2026-05-20",
    excerpt:
      "The Digital Personal Data Protection Act, 2023 is India's most significant data regulation since the IT Act. Here is what it requires, which enterprises are affected, and the data governance steps you should be taking now.",
    category: "Data Management",
    readTime: 9,
    author: "Cognexa Data Team",
    authorRole: "Enterprise Data Practice",
    featured: true,
    body: [
      {
        type: "paragraph",
        content:
          "India's Digital Personal Data Protection (DPDP) Act, 2023 passed into law in August 2023 and is in the process of being operationalised through rules. When fully in effect, it will fundamentally change how Indian enterprises collect, process, store, and share personal data. Unlike earlier Indian data regulations, the DPDP Act has teeth: fines of up to ₹250 crore for significant violations.",
      },
      {
        type: "paragraph",
        content:
          "This is not a future concern for IT teams to park until the rules are finalised. The organisations that will comply with the least disruption are the ones building compliant data practices now — before the enforcement machinery is fully operational.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Core Obligations Under DPDP",
      },
      {
        type: "paragraph",
        content:
          "The Act creates obligations for 'Data Fiduciaries' — any entity that determines the purpose and means of processing personal data. If your organisation collects, processes, or stores personal data of Indian citizens, you are a Data Fiduciary under the Act.",
      },
      {
        type: "list",
        items: [
          "Consent: Obtain free, specific, informed, unconditional, and unambiguous consent before processing personal data",
          "Purpose limitation: Use data only for the specific purpose for which consent was obtained",
          "Data minimisation: Collect only the data necessary for the stated purpose",
          "Storage limitation: Retain data only as long as the purpose requires; delete it after",
          "Data Principal rights: Respond to requests for access, correction, erasure, and grievances within specified timelines",
          "Data breach reporting: Notify the Data Protection Board and affected individuals of significant breaches",
          "Data localisation: Significant Data Fiduciaries face restrictions on cross-border data transfers",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "The Act applies to any enterprise processing personal data of Indian citizens, regardless of where the enterprise is located. An Indian enterprise processing employee or customer data is fully covered. The penalties for non-compliance scale with the violation — up to ₹250 crore for failing to implement reasonable security safeguards.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Data Governance Gap Most Indian Enterprises Have",
      },
      {
        type: "paragraph",
        content:
          "To comply with DPDP, you need to know: what personal data you hold, where it lives, why you have it, who has access, and how long you will keep it. This sounds straightforward. In practice, for most organisations with more than a few hundred employees and systems built over a decade, the answer is: we do not fully know.",
      },
      {
        type: "paragraph",
        content:
          "Customer data exists in the CRM, the billing system, the support tool, the marketing platform, and email archives. Employee data is in the HRMS, the payroll system, the access control system, and individual spreadsheets on shared drives. This data fragmentation is the governance gap that DPDP compliance requires you to close.",
      },
      {
        type: "heading",
        level: 2,
        content: "Four Data Governance Steps to Take Before Enforcement",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 1: Data Discovery and Classification",
      },
      {
        type: "paragraph",
        content:
          "Inventory every system that stores personal data. Classify the data by type (identity, financial, health, behavioural) and sensitivity. This is not a one-time exercise — it needs to be an ongoing process as new systems are added. The output is a Data Register: a documented record of what you hold, where, and why.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 2: Consent and Purpose Mapping",
      },
      {
        type: "paragraph",
        content:
          "For each category of personal data, document the purpose for which it was collected and the consent mechanism used. Where consent is not currently the legal basis for processing, determine whether it needs to be, or whether a legitimate interest basis applies. This mapping exercise often surfaces data that was collected without adequate consent — which needs to be either re-consented or deleted.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 3: Retention and Deletion Policies",
      },
      {
        type: "paragraph",
        content:
          "DPDP requires that data not be retained longer than necessary. For many organisations, data is never deleted — it accumulates indefinitely in backup systems, email archives, and legacy databases. Implement retention schedules for each data category, and build the technical capability to execute deletion when the retention period expires. This is harder than it sounds for distributed data environments.",
      },
      {
        type: "heading",
        level: 3,
        content: "Step 4: Security Controls Proportionate to Risk",
      },
      {
        type: "paragraph",
        content:
          "The Act requires 'reasonable security safeguards' proportionate to the risk of the data being processed. For Significant Data Fiduciaries processing sensitive personal data at scale, this means documented security policies, access controls, encryption at rest and in transit, periodic security audits, and documented breach response procedures.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Connection to Master Data Management",
      },
      {
        type: "paragraph",
        content:
          "Organisations with well-implemented Master Data Management (MDM) have a significant advantage in DPDP compliance. When personal data is centralised, governed, and consistent — rather than duplicated across systems with inconsistent quality — responding to Data Principal rights requests (access, correction, erasure) becomes operationally feasible. Without MDM, finding and deleting all instances of a specific person's data across your infrastructure is an expensive manual exercise.",
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "If your organisation has not yet invested in MDM, DPDP compliance is a compelling business case for doing so now. The governance capability you build to comply with DPDP also improves data quality for analytics, reduces duplication in operational systems, and lowers storage costs.",
      },
    ],
  },

  {
    slug: "master-data-management-indian-erp-practical-guide",
    title: "Master Data Management for Indian Enterprises: Why Your ERP's Data Is Broken — and How to Fix It",
    date: "2026-05-12",
    excerpt:
      "Duplicate vendor codes, inconsistent item descriptions, fragmented customer records — poor master data is costing Indian enterprises in reporting accuracy, procurement efficiency, and audit readiness. Here is a practical MDM implementation guide.",
    category: "Data Management",
    readTime: 8,
    author: "Cognexa Data Team",
    authorRole: "Enterprise Data Practice",
    body: [
      {
        type: "paragraph",
        content:
          "Here is a scenario that occurs in more Indian enterprises than most IT leaders are comfortable admitting. A procurement team needs to run a spend analysis. They pull vendor data from the ERP. They find that the same vendor — say, a packaging supplier in Pune — appears under seven different names: 'Sharma Packaging', 'Sharma Packaging Pvt Ltd', 'Sharma Pkg', 'SHARMA PACKAGING', 'Sharma Packing', 'Sharma Packaging LLP', and 'Sharma Pkg. Pvt'. The team spends a week reconciling the records before the analysis can even begin.",
      },
      {
        type: "paragraph",
        content:
          "Multiply this across vendors, customers, items, and employees — across multiple entities, acquired companies, or regional offices — and you have a data quality problem that is costing real money in decision-making latency, procurement inefficiency, and audit preparation time.",
      },
      {
        type: "heading",
        level: 2,
        content: "Why Indian ERP Environments Have Particularly Severe MDM Problems",
      },
      {
        type: "paragraph",
        content:
          "Several factors specific to Indian enterprise environments compound the data quality challenge:",
      },
      {
        type: "list",
        items: [
          "Multiple entities under one group: Indian business groups often operate 5-15 legal entities, each with their own ERP instances and master data created independently",
          "Legacy migration debt: Data migrated from older systems (or from Tally to SAP, for example) was rarely cleaned before migration",
          "Localisation complexity: Vendor and customer names in English transliterations of Hindi or regional language names have no standard form",
          "GST compliance gaps: GSTIN mapping to vendor master records is frequently incomplete or inconsistent",
          "High staff turnover in data entry roles: No consistent data creation standards enforced across teams",
          "Acquired companies: M&A activity brings in ERP instances with entirely different master data structures",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "The Four Domains of Enterprise Master Data",
      },
      {
        type: "paragraph",
        content:
          "MDM covers four primary domains. Each has its own data quality patterns, business impact, and cleansing approach.",
      },
      {
        type: "table",
        headers: ["Domain", "Common Issues", "Business Impact"],
        rows: [
          ["Customer MDM", "Duplicate records, inconsistent addresses, missing GSTIN", "Billing errors, compliance risk, poor CRM insights"],
          ["Vendor MDM", "Duplicate codes, name variants, missing PAN/GSTIN", "Payment errors, audit findings, procurement inefficiency"],
          ["Product/Item MDM", "Duplicate items, inconsistent descriptions, missing specs", "Wrong procurement, poor inventory analytics"],
          ["Employee MDM", "Duplicate IDs, inconsistent name formats, outdated records", "Payroll errors, DPDP compliance risk"],
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "The MDM Implementation Process",
      },
      {
        type: "heading",
        level: 3,
        content: "Phase 1: Discovery and Profiling",
      },
      {
        type: "paragraph",
        content:
          "Before you can fix master data, you need to understand how broken it is. Data profiling analyses your existing records to quantify: duplicate rate (what percentage of records are duplicates of other records), completeness (what percentage of required fields are populated), consistency (are the same values represented the same way across systems), and conformity (do values match expected formats — PAN, GSTIN, pincode).",
      },
      {
        type: "paragraph",
        content:
          "For a typical mid-size Indian enterprise, we commonly find: 8-15% duplicate rate in vendor master, 12-20% duplicate rate in customer master, 5-10% of item codes active in the ERP that are either obsolete or duplicates of other items.",
      },
      {
        type: "heading",
        level: 3,
        content: "Phase 2: Cleansing",
      },
      {
        type: "paragraph",
        content:
          "Cleansing involves standardising name formats, merging duplicate records (with survivor record selection logic), enriching incomplete records from verified sources, and flagging or deleting obsolete records. This phase is labour-intensive and requires domain knowledge — a vendor master cleanse requires understanding of business relationships, not just data matching algorithms.",
      },
      {
        type: "heading",
        level: 3,
        content: "Phase 3: Governance Framework",
      },
      {
        type: "paragraph",
        content:
          "Cleaned data becomes dirty again without governance. A governance framework defines: who has authority to create new master records, what information must be provided before a record can be created, what validation rules the system enforces at creation, and what the process is for requesting changes. Without governance, you are mopping the floor with the tap still running.",
      },
      {
        type: "callout",
        variant: "insight",
        content:
          "Our data management practice has cleaned over 10,000 enterprise data records across ERP platforms including SAP, Oracle, Microsoft Dynamics, and Infor. The single most common finding: organisations have 2-3x more active records than they have active business relationships. The cleanup consistently reduces storage costs, improves query performance, and makes analytics materially more accurate.",
      },
      {
        type: "heading",
        level: 2,
        content: "Measuring the ROI",
      },
      {
        type: "paragraph",
        content:
          "MDM ROI is measurable across three categories. Procurement efficiency: with clean vendor master, spend analysis becomes hours instead of weeks, enabling better supplier negotiations. Compliance: GSTIN-matched records prevent GST credit mismatches and audit penalties. Data-driven decisions: duplicate-free customer and product data produces accurate sales analytics for the first time in some organisations.",
      },
      {
        type: "paragraph",
        content:
          "If your organisation is planning an ERP upgrade, migration to S/4HANA, or consolidation of entities — the single highest-ROI investment you can make before the migration is a master data cleanse. The cost of migrating dirty data into a new system is significantly higher than cleaning it before migration.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  return posts.filter((p) => p.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter((p) => p.featured);
}

export function getAllCategories(): Category[] {
  return Array.from(new Set(posts.map((p) => p.category))) as Category[];
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
