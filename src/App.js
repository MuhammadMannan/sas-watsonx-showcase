import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  Content,
  Grid,
  Column,
  Section,
  Heading,
  Button,
  Tag,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Tile,
  Stack,
} from '@carbon/react';
import {
  Analytics,
  CloudDataOps,
  DataBase,
  Collaborate,
  Security,
  ChartLineData,
  Rocket,
  CheckmarkOutline,
} from '@carbon/icons-react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header aria-label="SAS & watsonx">
        <HeaderName href="#" prefix="IBM">
          SAS & watsonx Partnership
        </HeaderName>
        <HeaderNavigation aria-label="Navigation">
          <HeaderMenuItem href="#overview">Overview</HeaderMenuItem>
          <HeaderMenuItem href="#initiatives">Initiatives</HeaderMenuItem>
          <HeaderMenuItem href="#watsonx">watsonx</HeaderMenuItem>
          <HeaderMenuItem href="#mapping">Solution Mapping</HeaderMenuItem>
          <HeaderMenuItem href="#next-steps">Next Steps</HeaderMenuItem>
        </HeaderNavigation>
      </Header>

      <Content>
        {/* Hero Section */}
        <Section className="hero-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <div className="hero-content">
                <Heading className="hero-title">
                  SAS & watsonx – Partnering for AI‑enabled Growth
                </Heading>
                <p className="hero-subtitle">
                  Exploring how IBM watsonx aligns with SAS's strategic initiatives in data scale, 
                  AI democratization, compliance, and talent development
                </p>
                <div className="hero-tags">
                  <Tag type="blue">AI & Analytics</Tag>
                  <Tag type="purple">Enterprise Scale</Tag>
                  <Tag type="green">Governance</Tag>
                  <Tag type="teal">Innovation</Tag>
                </div>
              </div>
            </Column>
          </Grid>
        </Section>

        {/* SAS Overview Section */}
        <Section id="overview" className="sas-overview-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                SAS – The World's Leading Analytics Platform
              </Heading>
            </Column>
            <Column lg={8} md={4} sm={4}>
              <Tile className="info-tile">
                <Analytics size={32} className="tile-icon" />
                <h4>45+ Years of Leadership</h4>
                <p>Founded in 1976, SAS has been at the forefront of analytics innovation for over four decades.</p>
              </Tile>
            </Column>
            <Column lg={8} md={4} sm={4}>
              <Tile className="info-tile">
                <ChartLineData size={32} className="tile-icon" />
                <h4>Global Reach</h4>
                <p>Serving 14,000+ customers across 150 countries in finance, healthcare, government, and retail sectors.</p>
              </Tile>
            </Column>
            <Column lg={16} md={8} sm={4}>
              <Tile className="platform-tile">
                <h4>Comprehensive Analytics Platform</h4>
                <Stack gap={4}>
                  <p>✓ Data integration and preparation</p>
                  <p>✓ Advanced analytics and statistical modeling</p>
                  <p>✓ AI/ML capabilities</p>
                  <p>✓ Reporting and visualization</p>
                  <p>✓ Cloud-based analytics subscriptions driving revenue growth</p>
                </Stack>
              </Tile>
            </Column>
          </Grid>
        </Section>

        {/* SAS Initiatives Section */}
        <Section id="initiatives" className="initiatives-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Key Strategic Initiatives (2025‑2027)
              </Heading>
              <p className="section-description">
                SAS has identified four priority areas for the next few years, each representing 
                a critical path to maintaining their market leadership and meeting evolving customer needs.
              </p>
            </Column>
            
            <Column lg={8} md={4} sm={4}>
              <Tile className="initiative-tile">
                <DataBase size={32} className="tile-icon blue" />
                <h4>Scale Data & AI Workloads</h4>
                <p>
                  Expand hybrid-cloud data lakehouse to support petabyte-scale analytics, 
                  enabling customers to process massive datasets efficiently.
                </p>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="initiative-tile">
                <Collaborate size={32} className="tile-icon purple" />
                <h4>Democratize AI</h4>
                <p>
                  Self-service model building for business users, reducing talent bottlenecks 
                  and empowering citizen analysts across the organization.
                </p>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="initiative-tile">
                <Security size={32} className="tile-icon green" />
                <h4>Strengthen Compliance & Governance</h4>
                <p>
                  Meet EU AI Act, FedRAMP, ISO 27001, and GDPR requirements across all AI 
                  pipelines to ensure regulatory compliance.
                </p>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="initiative-tile">
                <Rocket size={32} className="tile-icon teal" />
                <h4>Accelerate Talent Development</h4>
                <p>
                  Embed AI-ops and model-ops tooling to upskill data scientists and 
                  citizen analysts, building internal capabilities.
                </p>
              </Tile>
            </Column>
          </Grid>
        </Section>

        {/* watsonx Portfolio Section */}
        <Section id="watsonx" className="watsonx-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                IBM watsonx – End‑to‑End AI & Data Platform
              </Heading>
              <p className="section-description">
                The watsonx suite delivers a unified, hybrid-multicloud foundation covering everything 
                from data ingestion to model governance, with flexible deployment options and strong 
                compliance certifications.
              </p>
            </Column>

            {/* watsonx.ai */}
            <Column lg={16} md={8} sm={4}>
              <Tile className="watsonx-product-tile">
                <div className="product-header">
                  <Analytics size={40} className="product-icon" />
                  <div>
                    <h3>watsonx.ai</h3>
                    <p className="product-subtitle">Enterprise-Grade AI Studio</p>
                  </div>
                </div>
                <div className="product-content">
                  <Stack gap={4}>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Curated library of foundation models (Granite, Mistral, Llama)</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Prompt Lab & Retrieval-Augmented Generation for rapid prototyping</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Tuning Studio & PeFT for fine-tuning with minimal data</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Synthetic-data toolkit with differential privacy and fairness metrics</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Built-in MLOps: versioning, monitoring, governance</span>
                    </div>
                  </Stack>
                  <p className="product-benefit">
                    <strong>Benefit:</strong> Enables SAS's data scientists and citizen analysts to experiment, 
                    fine-tune, and deploy models in a single environment, accelerating AI democratization.
                  </p>
                </div>
              </Tile>
            </Column>

            {/* watsonx.data */}
            <Column lg={16} md={8} sm={4}>
              <Tile className="watsonx-product-tile">
                <div className="product-header">
                  <DataBase size={40} className="product-icon" />
                  <div>
                    <h3>watsonx.data</h3>
                    <p className="product-subtitle">Open, Hybrid Data Lakehouse</p>
                  </div>
                </div>
                <div className="product-content">
                  <Stack gap={4}>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Multi-engine architecture (Presto, Spark, OpenSearch, vector & NoSQL)</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Open data formats & integrated metadata catalog (IBM Knowledge Catalog)</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Seamless LinuxONE integration with quantum-safe encryption</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Flexible licensing & consumption-based pricing</span>
                    </div>
                  </Stack>
                  <p className="product-benefit">
                    <strong>Benefit:</strong> Provides unified lakehouse for scaling data workloads across 
                    on-prem, multi-cloud, and SaaS environments with reduced lock-in.
                  </p>
                </div>
              </Tile>
            </Column>

            {/* watsonx Orchestrate */}
            <Column lg={16} md={8} sm={4}>
              <Tile className="watsonx-product-tile">
                <div className="product-header">
                  <CloudDataOps size={40} className="product-icon" />
                  <div>
                    <h3>watsonx Orchestrate</h3>
                    <p className="product-subtitle">Low-Code Agent Platform</p>
                  </div>
                </div>
                <div className="product-content">
                  <Stack gap={4}>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Visual, drag-and-drop builder for autonomous AI agents</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Unified control plane for multi-agent orchestration</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Pre-built domain agents (HR, finance, supply-chain, customer service)</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>FedRAMP, ISO 27001, SOC 1/2, GDPR compliance certifications</span>
                    </div>
                  </Stack>
                  <p className="product-benefit">
                    <strong>Benefit:</strong> Extends SAS analytics into automated decision-making with 
                    enterprise-grade compliance controls.
                  </p>
                </div>
              </Tile>
            </Column>

            {/* watsonx.governance */}
            <Column lg={16} md={8} sm={4}>
              <Tile className="watsonx-product-tile">
                <div className="product-header">
                  <Security size={40} className="product-icon" />
                  <div>
                    <h3>watsonx.governance</h3>
                    <p className="product-subtitle">End-to-End AI Governance</p>
                  </div>
                </div>
                <div className="product-content">
                  <Stack gap={4}>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Continuous risk scoring, bias & drift monitoring</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Automated policy mapping to EU AI Act, FedRAMP, ISO 27001, GDPR</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>Audit-ready documentation & governance graph</span>
                    </div>
                    <div className="feature">
                      <CheckmarkOutline size={20} />
                      <span>SaaS and licensed-software deployment options</span>
                    </div>
                  </Stack>
                  <p className="product-benefit">
                    <strong>Benefit:</strong> Provides real-time monitoring and automated evidence generation 
                    for regulatory compliance across all AI assets.
                  </p>
                </div>
              </Tile>
            </Column>
          </Grid>
        </Section>

        {/* Solution Mapping Section */}
        <Section id="mapping" className="mapping-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Solution Mapping – watsonx Meets SAS Priorities
              </Heading>
              <p className="section-description">
                Each SAS strategic pillar is matched with a watsonx component that delivers 
                the required capability, reducing time-to-value and risk.
              </p>
            </Column>
            <Column lg={16} md={8} sm={4}>
              <StructuredListWrapper className="mapping-table">
                <StructuredListHead>
                  <StructuredListRow head>
                    <StructuredListCell head>SAS Initiative</StructuredListCell>
                    <StructuredListCell head>watsonx Capability</StructuredListCell>
                  </StructuredListRow>
                </StructuredListHead>
                <StructuredListBody>
                  <StructuredListRow>
                    <StructuredListCell>
                      <strong>Scale data & AI workloads</strong>
                    </StructuredListCell>
                    <StructuredListCell>
                      watsonx.data hybrid lakehouse + LinuxONE integration for petabyte-scale processing
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>
                      <strong>Democratize AI</strong>
                    </StructuredListCell>
                    <StructuredListCell>
                      watsonx.ai Prompt Lab, Tuning Studio, synthetic data; low-code Orchestrate platform
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>
                      <strong>Strengthen compliance</strong>
                    </StructuredListCell>
                    <StructuredListCell>
                      watsonx.governance continuous monitoring; Orchestrate compliance certifications
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>
                      <strong>Accelerate talent development</strong>
                    </StructuredListCell>
                    <StructuredListCell>
                      AI studio UI, pre-built agents, governance training modules for upskilling teams
                    </StructuredListCell>
                  </StructuredListRow>
                </StructuredListBody>
              </StructuredListWrapper>
            </Column>
          </Grid>
        </Section>

        {/* Next Steps Section */}
        <Section id="next-steps" className="next-steps-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Proposed Engagement Path
              </Heading>
              <p className="section-description">
                A phased approach to demonstrate value and build a comprehensive implementation roadmap.
              </p>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="step-tile">
                <div className="step-number">1</div>
                <h4>Discovery Workshop</h4>
                <p>Joint session to detail SAS data landscape & AI use-cases</p>
                <Tag type="blue">2 days</Tag>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="step-tile">
                <div className="step-number">2</div>
                <h4>Proof-of-Concept</h4>
                <p>Pilot watsonx.ai + watsonx.data on a high-value SAS analytics workload</p>
                <Tag type="purple">30 days</Tag>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="step-tile">
                <div className="step-number">3</div>
                <h4>Governance Assessment</h4>
                <p>Run watsonx.governance risk scoring on existing SAS models</p>
                <Tag type="green">2 weeks</Tag>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="step-tile">
                <div className="step-number">4</div>
                <h4>Roadmap Alignment</h4>
                <p>Co-create a 12-month implementation plan with milestones and success metrics</p>
                <Tag type="teal">Ongoing</Tag>
              </Tile>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <div className="cta-section">
                <h3>Ready to Get Started?</h3>
                <p>Let's schedule a discovery workshop to explore how watsonx can accelerate SAS's strategic initiatives.</p>
                <Button size="lg" className="cta-button">
                  Schedule Discovery Workshop
                </Button>
              </div>
            </Column>
          </Grid>
        </Section>

        {/* Footer */}
        <Section className="footer-section">
          <Grid>
            <Column lg={16} md={8} sm={4}>
              <div className="footer-content">
                <p>© 2026 IBM Corporation. All rights reserved.</p>
                <p>IBM watsonx is a trademark of International Business Machines Corporation.</p>
              </div>
            </Column>
          </Grid>
        </Section>
      </Content>
    </div>
  );
}

export default App;

// Made with Bob
