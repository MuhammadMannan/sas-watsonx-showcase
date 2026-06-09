import React, { useState } from 'react';
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
  Tile,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  ProgressIndicator,
  ProgressStep,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import {
  Analytics,
  CloudDataOps,
  DataBase,
  Collaborate,
  Security,
  ChartLineData,
  Rocket,
  Globe,
  ArrowRight,
  Growth,
  CheckmarkFilled,
  WarningFilled,
} from '@carbon/icons-react';
import './App_Enhanced.scss';

function App() {
  const [selectedInitiative, setSelectedInitiative] = useState(0);

  // Solution Mapping Data
  const solutionMappingHeaders = [
    { key: 'initiative', header: 'SAS Initiative' },
    { key: 'capability', header: 'watsonx Capability' },
    { key: 'outcome', header: 'Business Outcome' },
  ];

  const solutionMappingRows = [
    {
      id: '1',
      initiative: 'Scale Data & AI Workloads',
      capability: 'watsonx.data',
      outcome: 'Improved performance and reduced infrastructure cost',
    },
    {
      id: '2',
      initiative: 'Democratize AI',
      capability: 'watsonx.ai',
      outcome: 'Increased accessibility and faster adoption',
    },
    {
      id: '3',
      initiative: 'Strengthen Governance',
      capability: 'watsonx.governance',
      outcome: 'Improved compliance and reduced risk',
    },
    {
      id: '4',
      initiative: 'Accelerate Talent Development',
      capability: 'watsonx Orchestrate',
      outcome: 'Increased productivity and operational efficiency',
    },
  ];

  return (
    <div className="app">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Header aria-label="SAS & watsonx Partnership">
        <HeaderName href="#" prefix="IBM">
          SAS & watsonx Partnership
        </HeaderName>
        <HeaderNavigation aria-label="Main navigation">
          <HeaderMenuItem href="#hero">Overview</HeaderMenuItem>
          <HeaderMenuItem href="#context">Why Now</HeaderMenuItem>
          <HeaderMenuItem href="#sas">About SAS</HeaderMenuItem>
          <HeaderMenuItem href="#challenges">Challenges</HeaderMenuItem>
          <HeaderMenuItem href="#transformation">Transformation</HeaderMenuItem>
          <HeaderMenuItem href="#initiatives">Initiatives</HeaderMenuItem>
          <HeaderMenuItem href="#watsonx">watsonx Platform</HeaderMenuItem>
          <HeaderMenuItem href="#value">Business Value</HeaderMenuItem>
          <HeaderMenuItem href="#engagement">Next Steps</HeaderMenuItem>
        </HeaderNavigation>
      </Header>

      <Content id="main-content">
        {/* Hero Section - White Background */}
        <Section id="hero" className="hero-section">
          <Grid>
            <Column lg={12} md={8} sm={4}>
              <div className="hero-content">
                <Heading className="hero-title">
                  SAS & watsonx – Partnering for AI-Enabled Growth
                </Heading>
                <p className="hero-subtitle">
                  SAS has long been a leader in advanced analytics, helping organizations transform data 
                  into insight for over four decades. However, as the enterprise landscape shifts toward 
                  large-scale AI, hybrid cloud, and increasingly complex data ecosystems, organizations 
                  face growing challenges in scalability, governance, and accessibility.
                </p>
                <p className="hero-subtitle">
                  IBM watsonx provides a modern, enterprise-ready AI and data platform designed to help 
                  SAS accelerate innovation, scale AI workloads, and enable responsible AI adoption across 
                  the organization.
                </p>
                <div className="hero-tags">
                  <Tag type="blue">AI at Scale</Tag>
                  <Tag type="purple">Hybrid Cloud</Tag>
                  <Tag type="green">Governance</Tag>
                  <Tag type="teal">Generative AI</Tag>
                </div>
              </div>
            </Column>
          </Grid>
        </Section>

        {/* Why Now Section - Light Gray Background */}
        <Section id="context" className="context-section">
          <div className="section-container">
            <Heading className="section-heading">
              Why AI Transformation is Critical Now
            </Heading>
            
            <div className="context-grid">
              <Tile className="context-tile">
                <Growth size={40} className="tile-icon" />
                <p>
                  The rapid rise of artificial intelligence and generative AI is fundamentally changing
                  how organizations operate. Businesses are under increasing pressure to integrate AI
                  into decision-making processes at scale.
                </p>
              </Tile>

              <Tile className="context-tile">
                <DataBase size={40} className="tile-icon" />
                <p>
                  Data volumes are growing exponentially, with organizations managing structured and
                  unstructured data across multiple environments. Traditional architectures are no
                  longer sufficient to support modern analytics demands.
                </p>
              </Tile>

              <Tile className="context-tile">
                <Security size={40} className="tile-icon" />
                <p>
                  Regulatory expectations continue to increase, requiring organizations to ensure
                  transparency, accountability, and auditability in AI systems. Governance is no
                  longer optional—it is essential.
                </p>
              </Tile>

              <Tile className="context-tile">
                <Rocket size={40} className="tile-icon" />
                <p>
                  Organizations must move faster from data to insight. The ability to operationalize
                  AI quickly is becoming a key competitive differentiator.
                </p>
              </Tile>
            </div>
          </div>
        </Section>

        {/* SAS Overview Section - White Background */}
        <Section id="sas" className="sas-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                SAS – The World's Leading Analytics Platform
              </Heading>
              <p className="section-description">
                SAS is a global leader in analytics, with more than 45 years of experience delivering 
                advanced data and AI solutions. It serves over 40,000 organizations worldwide across 
                industries such as healthcare, financial services, government, and retail.
              </p>
              <p className="section-description">
                Its platform provides powerful capabilities across data integration, machine learning, 
                predictive analytics, and visualization, enabling enterprises to make informed, 
                data-driven decisions.
              </p>
            </Column>

            <Column lg={5} md={4} sm={4}>
              <Tile className="sas-tile">
                <Analytics size={32} className="tile-icon" />
                <h4>45+ Years of Leadership</h4>
                <p>SAS has consistently led innovation in analytics since its founding in 1976.</p>
              </Tile>
            </Column>

            <Column lg={5} md={4} sm={4}>
              <Tile className="sas-tile">
                <Globe size={32} className="tile-icon" />
                <h4>Global Reach</h4>
                <p>Serving customers in over 100 countries across multiple industries.</p>
              </Tile>
            </Column>

            <Column lg={6} md={4} sm={4}>
              <Tile className="sas-tile">
                <ChartLineData size={32} className="tile-icon" />
                <h4>Core Capabilities</h4>
                <p>Includes data management, AI/ML modeling, and advanced analytics.</p>
              </Tile>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Challenges Section - Light Gray Background */}
        <Section id="challenges" className="challenges-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Key Challenges Facing SAS
              </Heading>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <Accordion size="lg">
                <AccordionItem title="Legacy Systems & Modernization">
                  <div className="challenge-content">
                    <p className="challenge-description">
                      Many existing SAS environments rely on legacy infrastructure that limits scalability,
                      flexibility, and integration with modern platforms. This creates barriers to adopting
                      cloud-native architectures and slows innovation.
                    </p>
                    <ul className="challenge-list">
                      <li>Difficulty scaling workloads efficiently</li>
                      <li>High operational and infrastructure costs</li>
                      <li>Limited integration with modern cloud ecosystems</li>
                    </ul>
                  </div>
                </AccordionItem>

                <AccordionItem title="Scaling AI & Data Workloads">
                  <div className="challenge-content">
                    <p className="challenge-description">
                      As organizations generate increasing volumes of data, SAS must support more complex
                      and compute-intensive analytics workloads. Traditional systems struggle to keep pace
                      with these demands.
                    </p>
                    <ul className="challenge-list">
                      <li>Rapid growth in data volume and complexity</li>
                      <li>Inefficient data pipelines and processing delays</li>
                      <li>Performance limitations for large-scale analytics</li>
                    </ul>
                  </div>
                </AccordionItem>

                <AccordionItem title="Governance & Compliance Complexity">
                  <div className="challenge-content">
                    <p className="challenge-description">
                      AI adoption introduces new risks and regulatory challenges. Organizations must ensure
                      models are transparent, auditable, and compliant with evolving regulations.
                    </p>
                    <ul className="challenge-list">
                      <li>Meeting regulatory requirements such as GDPR</li>
                      <li>Managing model lifecycle and risk</li>
                      <li>Ensuring explainability and accountability</li>
                    </ul>
                  </div>
                </AccordionItem>

                <AccordionItem title="Democratization of AI">
                  <div className="challenge-content">
                    <p className="challenge-description">
                      AI capabilities must extend beyond data scientists to business users across the
                      organization. However, complexity and skill gaps limit accessibility.
                    </p>
                    <ul className="challenge-list">
                      <li>Limited usability for non-technical users</li>
                      <li>Shortage of AI-skilled talent</li>
                      <li>Need for intuitive, simplified tools</li>
                    </ul>
                  </div>
                </AccordionItem>
              </Accordion>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Before vs After Section - White Background */}
        <Section id="transformation" className="transformation-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Transforming SAS with watsonx
              </Heading>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <div className="comparison-card before">
                <div className="comparison-header">
                  <WarningFilled size={32} className="comparison-icon" />
                  <h3>SAS Today</h3>
                </div>
                <ul className="comparison-list">
                  <li>Data is siloed across multiple systems, limiting visibility and integration</li>
                  <li>AI model development and deployment are slow and resource-intensive</li>
                  <li>Governance processes are manual and difficult to scale</li>
                  <li>AI tools are primarily accessible to technical users</li>
                </ul>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <div className="comparison-card after">
                <div className="comparison-header">
                  <CheckmarkFilled size={32} className="comparison-icon" />
                  <h3>With IBM watsonx</h3>
                </div>
                <ul className="comparison-list">
                  <li>Unified data architecture using a hybrid lakehouse approach</li>
                  <li>Faster model development and deployment with integrated AI tools</li>
                  <li>Automated governance with built-in monitoring and compliance</li>
                  <li>AI capabilities accessible across business and technical users</li>
                </ul>
              </div>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Initiatives Section - Light Gray Background */}
        <Section id="initiatives" className="initiatives-section">
          <div className="section-container">
            <Heading className="section-heading">
              Key Strategic Initiatives (2025–2027)
            </Heading>
            
            <div className="tabs-container">
              <Tabs
                selectedIndex={selectedInitiative}
                onChange={({ selectedIndex }) => setSelectedInitiative(selectedIndex)}
              >
                <TabList aria-label="SAS Strategic Initiatives" contained>
                  <Tab>Scale Data & AI Workloads</Tab>
                  <Tab>Democratize AI</Tab>
                  <Tab>Strengthen Governance & Compliance</Tab>
                  <Tab>Accelerate Talent Development</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="tab-content">
                      <DataBase size={48} className="tab-icon" />
                      <h3>Scale Data & AI Workloads</h3>
                      <p>
                        SAS aims to modernize its infrastructure to support high-volume, high-complexity
                        analytics workloads. This includes adopting cloud-based and hybrid architectures
                        that enable elastic scalability and improved performance.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-content">
                      <Collaborate size={48} className="tab-icon" />
                      <h3>Democratize AI</h3>
                      <p>
                        The goal is to make AI accessible across the enterprise by providing intuitive
                        tools that allow analysts and business users to build and use models without
                        deep technical expertise.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-content">
                      <Security size={48} className="tab-icon" />
                      <h3>Strengthen Governance & Compliance</h3>
                      <p>
                        SAS is focused on implementing robust governance frameworks that ensure transparency,
                        accountability, and regulatory compliance across all AI systems.
                      </p>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="tab-content">
                      <Rocket size={48} className="tab-icon" />
                      <h3>Accelerate Talent Development</h3>
                      <p>
                        Organizations must invest in upskilling their workforce and enabling teams with
                        tools that improve productivity and simplify AI adoption.
                      </p>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </Section>

        {/* watsonx Platform Section - DARK Background */}
        <Section id="watsonx" className="watsonx-section dark">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading light">
                IBM watsonx – End-to-End AI & Data Platform
              </Heading>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <div className="watsonx-card">
                <Analytics size={40} className="watsonx-icon" />
                <h3>watsonx.ai</h3>
                <p>
                  Provides an enterprise AI studio for building, training, and deploying machine learning 
                  and foundation models. It supports prompt engineering, model tuning, and scalable AI development.
                </p>
                <div className="benefit">
                  <strong>Benefit:</strong> Enables faster AI innovation and deployment.
                </div>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <div className="watsonx-card">
                <DataBase size={40} className="watsonx-icon" />
                <h3>watsonx.data</h3>
                <p>
                  A hybrid, open data lakehouse architecture designed to manage large volumes of structured 
                  and unstructured data efficiently.
                </p>
                <div className="benefit">
                  <strong>Benefit:</strong> Reduces cost while improving scalability and performance.
                </div>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <div className="watsonx-card">
                <CloudDataOps size={40} className="watsonx-icon" />
                <h3>watsonx Orchestrate</h3>
                <p>
                  Automates business processes and workflows by integrating AI into day-to-day operations.
                </p>
                <div className="benefit">
                  <strong>Benefit:</strong> Increases efficiency and reduces manual effort.
                </div>
              </div>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <div className="watsonx-card">
                <Security size={40} className="watsonx-icon" />
                <h3>watsonx.governance</h3>
                <p>
                  Provides lifecycle management, monitoring, and compliance tools for AI systems.
                </p>
                <div className="benefit">
                  <strong>Benefit:</strong> Ensures responsible AI adoption and reduces risk.
                </div>
              </div>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* How It Works Section - White Background */}
        <Section id="how-it-works" className="how-it-works-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                How watsonx Powers SAS Transformation
              </Heading>
            </Column>

            <Column lg={4} md={2} sm={4}>
              <div className="flow-step">
                <div className="step-number">1</div>
                <h4>Data Ingestion</h4>
                <p>Data ingestion and integration using watsonx.data</p>
              </div>
            </Column>

            <Column lg={4} md={2} sm={4}>
              <div className="flow-step">
                <div className="step-number">2</div>
                <h4>Model Development</h4>
                <p>Model development and training using watsonx.ai</p>
              </div>
            </Column>

            <Column lg={4} md={2} sm={4}>
              <div className="flow-step">
                <div className="step-number">3</div>
                <h4>Automation</h4>
                <p>Workflow automation using watsonx Orchestrate</p>
              </div>
            </Column>

            <Column lg={4} md={2} sm={4}>
              <div className="flow-step">
                <div className="step-number">4</div>
                <h4>Governance</h4>
                <p>Monitoring, governance, and compliance using watsonx.governance</p>
              </div>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Solution Mapping Section - Light Gray Background */}
        <Section id="mapping" className="mapping-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                How watsonx Aligns to SAS Priorities
              </Heading>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <DataTable rows={solutionMappingRows} headers={solutionMappingHeaders}>
                {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                  <TableContainer>
                    <Table {...getTableProps()} size="lg">
                      <TableHead>
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeader {...getHeaderProps({ header })} key={header.key}>
                              {header.header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow {...getRowProps({ row })} key={row.id}>
                            {row.cells.map((cell) => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Business Value Section - White Background */}
        <Section id="value" className="value-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Business Value & Impact
              </Heading>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="value-tile">
                <Rocket size={40} className="value-icon" />
                <h4>Faster Time-to-Insight</h4>
                <p>Accelerate analytics workflows and decision-making processes across the enterprise.</p>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="value-tile">
                <ChartLineData size={40} className="value-icon" />
                <h4>Reduced Costs</h4>
                <p>Optimize data storage and infrastructure through efficient lakehouse architecture.</p>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="value-tile">
                <Growth size={40} className="value-icon" />
                <h4>Increased Agility</h4>
                <p>Respond faster to changing business conditions with scalable AI systems.</p>
              </Tile>
            </Column>

            <Column lg={8} md={4} sm={4}>
              <Tile className="value-tile">
                <Security size={40} className="value-icon" />
                <h4>Improved Compliance</h4>
                <p>Ensure governance and regulatory alignment through built-in monitoring tools.</p>
              </Tile>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Use Cases Section - Light Gray Background */}
        <Section id="use-cases" className="use-cases-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Real-World Application Examples
              </Heading>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <div className="use-case-card">
                <h3>Fraud Detection</h3>
                <p>
                  Organizations can leverage watsonx.data to unify transaction data from multiple sources 
                  and use watsonx.ai to build advanced anomaly detection models. This enables faster 
                  identification of fraudulent activities while reducing false positives.
                </p>
              </div>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <div className="use-case-card">
                <h3>Healthcare Analytics</h3>
                <p>
                  By integrating data across clinical systems, organizations can use predictive models 
                  to improve patient outcomes and optimize resource allocation.
                </p>
              </div>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <div className="use-case-card">
                <h3>Forecasting</h3>
                <p>
                  Businesses can use AI models to predict demand, optimize supply chains, and improve 
                  operational planning accuracy.
                </p>
              </div>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Engagement Path Section - White Background */}
        <Section id="engagement" className="engagement-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <Heading className="section-heading">
                Proposed Engagement Path
              </Heading>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <div className="engagement-stepper">
                <ProgressIndicator currentIndex={0} spaceEqually>
                  <ProgressStep
                    label="Discovery Workshop"
                    description="Align stakeholders, define objectives, and identify high-value opportunities."
                  />
                  <ProgressStep
                    label="Proof of Concept"
                    description="Validate solutions using real-world data and use cases."
                  />
                  <ProgressStep
                    label="Governance Assessment"
                    description="Evaluate compliance, risk, and governance frameworks."
                  />
                  <ProgressStep
                    label="Roadmap Alignment"
                    description="Develop a scalable and sustainable long-term implementation plan."
                  />
                </ProgressIndicator>
              </div>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <div className="cta-section">
                <h3>Ready to Transform with watsonx?</h3>
                <p>
                  Let's schedule a discovery workshop to explore how IBM watsonx can accelerate 
                  SAS's strategic initiatives and drive measurable business outcomes.
                </p>
                <Button size="lg" className="cta-button" renderIcon={ArrowRight}>
                  Schedule Discovery Workshop
                </Button>
              </div>
            </Column>
            </Grid>
          </div>
        </Section>

        {/* Footer */}
        <Section className="footer-section">
          <div className="page-container">
            <Grid>
            <Column lg={16} md={8} sm={4}>
              <div className="footer-content">
                <p>© 2026 IBM Corporation. All rights reserved.</p>
                <p>IBM watsonx is a trademark of International Business Machines Corporation.</p>
              </div>
            </Column>
            </Grid>
          </div>
        </Section>
      </Content>
    </div>
  );
}

export default App;

// Made with Bob
