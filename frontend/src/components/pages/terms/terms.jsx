import React from "react";
import {
  Shield,
  Zap,
  DollarSign,
  FileText,
  Clock,
  Code2,
  HeadphonesIcon,
  Rocket,
} from "lucide-react";
import "./style.css";
import { Link } from "react-router-dom";

const TermsPage = () => {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Web Development",
      items: [
        "Simple WordPress Websites",
        "Complex Full-Stack Applications",
        "E-commerce Platforms",
        "SaaS Solutions",
        "Progressive Web Apps",
        "API Development",
      ],
    },
    {
      icon: <Rocket size={24} />,
      title: "DevOps & Infrastructure",
      items: [
        "Docker Containerization",
        "Microservices Architecture",
        "CI/CD Pipeline Setup",
        "Cloud Deployment (AWS, Azure, GCP)",
        "Domain & Hosting Configuration",
        "Git & Version Control Management",
      ],
    },
  ];

  return (
    <div className="terms-wrapper">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-bg"></div>
        <div className="terms-glow-orb terms-glow-orb-1"></div>
        <div className="terms-glow-orb terms-glow-orb-2"></div>

        <div className="terms-container">
          <div className="terms-hero-content">
            <div className="terms-badge">
              <Shield size={20} />
              <span>Terms of Service</span>
            </div>

            <h1 className="terms-hero-title">
              Transparent Terms,
              <br />
              Exceptional Results
            </h1>

            <p className="terms-hero-description">
              At SoftRanch, we believe in clarity, fairness, and delivering
              value that exceeds expectations. Our terms are designed to protect
              both parties while ensuring your project's success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="terms-services">
        <div className="terms-floating-glow terms-floating-glow-1"></div>
        <div className="terms-floating-glow terms-floating-glow-2"></div>

        <div className="terms-container">
          <div className="section-header">
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle">
              From simple websites to complex enterprise solutions, we're your
              one-stop destination for all things web development.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="services-extra">
            <p>
              We also specialize in UI/UX Design, SEO Optimization, Performance
              Tuning, Security Audits, and ongoing Maintenance & Support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className="terms-pricing">
        <div className="terms-container">
          <div className="pricing-content">
            <h2 className="section-title">
              Flexible Pricing That Works for You
            </h2>

            <div className="pricing-grid">
              <div className="pricing-card featured">
                <div className="pricing-header">
                  <DollarSign size={32} />
                  <h3>Project-Based</h3>
                </div>
                <p className="pricing-description">
                  Perfect for one-time projects with clear deliverables. We
                  analyze your requirements and provide a custom quote tailored
                  to your needs.
                </p>
                <ul className="pricing-features">
                  <li>25% upfront payment</li>
                  <li>75% on completion</li>
                  <li>Fixed scope & timeline</li>
                  <li>Comprehensive documentation</li>
                </ul>
                <div className="pricing-example">
                  <span className="example-label">Example:</span>
                  <span className="example-text">
                    $1000 project = $250 upfront, $750 on delivery
                  </span>
                </div>
              </div>

              <div className="pricing-card">
                <div className="pricing-header">
                  <Clock size={32} />
                  <h3>Monthly Subscription</h3>
                </div>
                <p className="pricing-description">
                  Ideal for ongoing development, maintenance, and support. Get
                  dedicated resources for continuous improvement.
                </p>
                <ul className="pricing-features">
                  <li>75% upfront payment</li>
                  <li>25% at month end</li>
                  <li>Flexible scope</li>
                  <li>Priority support</li>
                </ul>
                <div className="pricing-example">
                  <span className="example-label">Example:</span>
                  <span className="example-text">
                    $500/month = $375 upfront, $125 month end
                  </span>
                </div>
              </div>
            </div>

            <div className="pricing-note">
              <p>
                <strong>Every project is unique.</strong> We don't believe in
                one-size-fits-all pricing. After understanding your
                requirements, we'll provide a custom quote that delivers maximum
                value for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="terms-process">
        <div className="terms-container">
          <h2 className="section-title center">How We Work</h2>
          <p className="section-subtitle">
            Experience a development process that's transparent, efficient, and
            focused on your success
          </p>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Initial Consultation</h3>
              <p>
                Share your vision and requirements. We'll discuss possibilities,
                provide insights, and create a roadmap for success.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">02</div>
              <h3>Custom Proposal</h3>
              <p>
                Receive a detailed proposal with clear pricing, timeline, and
                deliverables. No hidden costs, no surprises.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Agile Development</h3>
              <p>
                Using cutting-edge technologies and modern methodologies, we
                build your solution efficiently and effectively.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">04</div>
              <h3>Regular Updates</h3>
              <p>
                Stay informed with progress updates at least twice a week. Your
                feedback drives our development process.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">05</div>
              <h3>Quality Delivery</h3>
              <p>
                Receive your project with comprehensive documentation, clean
                code, and training to ensure smooth handover.
              </p>
            </div>

            <div className="process-card">
              <div className="process-number">06</div>
              <h3>Ongoing Support</h3>
              <p>
                Our relationship doesn't end at delivery. We're here for
                maintenance, updates, and scaling as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="terms-guarantees">
        <div className="terms-glow-bg"></div>

        <div className="terms-container">
          <div className="guarantees-content">
            <h2 className="section-title center">Our Commitments to You</h2>

            <div className="guarantees-grid">
              <div className="guarantee-item">
                <Zap size={40} />
                <h3>Lightning-Fast Development</h3>
                <p>
                  We leverage modern tools and frameworks to deliver your
                  project faster without compromising quality.
                </p>
              </div>

              <div className="guarantee-item">
                <FileText size={40} />
                <h3>Complete Documentation</h3>
                <p>
                  Every project comes with detailed documentation, making it
                  easy for you or any developer to understand and maintain.
                </p>
              </div>

              <div className="guarantee-item">
                <HeadphonesIcon size={40} />
                <h3>Transparent Communication</h3>
                <p>
                  Regular updates, clear timelines, and open channels ensure
                  you're never left wondering about your project's status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Terms Section */}
      <section className="terms-additional">
        <div className="terms-container">
          <h2 className="section-title">Additional Terms</h2>

          <div className="terms-content">
            <div className="term-section">
              <h3>Intellectual Property</h3>
              <p>
                Upon full payment, all code, designs, and deliverables become
                your property. We retain the right to showcase the work in our
                portfolio unless otherwise agreed.
              </p>
            </div>

            <div className="term-section">
              <h3>Confidentiality</h3>
              <p>
                Your business information, trade secrets, and project details
                are safe with us. We maintain strict confidentiality and can
                sign NDAs when required.
              </p>
            </div>

            <div className="term-section">
              <h3>Quality Assurance</h3>
              <p>
                We stand behind our work. All projects include a 30-day bug-fix
                guarantee post-launch. Any issues related to our code will be
                resolved at no additional cost.
              </p>
            </div>

            <div className="term-section">
              <h3>Project Modifications</h3>
              <p>
                We understand requirements can evolve. Minor adjustments are
                accommodated within the project scope. Major changes are handled
                through transparent change requests.
              </p>
            </div>

            <div className="term-section">
              <h3>Technology Standards</h3>
              <p>
                We use industry-standard technologies and best practices,
                ensuring your project is scalable, secure, and maintainable for
                years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="terms-cta">
        <div className="terms-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss your requirements and create something extraordinary
              together
            </p>
            <div className="cta-buttons">
              <Link to={"/contact/"} className="cta-button primary">
                Get Your Custom Quote
                <Rocket size={20} />
              </Link>
              <Link to={"/portfolio/"} className="cta-button secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
