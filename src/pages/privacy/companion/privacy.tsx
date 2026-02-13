import React from "react";

const CompanionPrivacyPolicy: React.FC = () => {
  return (
    <main className="p-16 flex flex-col gap-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: 13 February 2026</p>

      <p>
        Companion ("we", "our", or "us") operates the Companion Learning Management
        System (LMS) application for colleges and educational institutions. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you use our application.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, student ID,
          course details, and institutional affiliation.
        </li>
        <li>
          <strong>Account Information:</strong> Login credentials, role (student,
          faculty, admin), and profile details.
        </li>
        <li>
          <strong>Usage Data:</strong> App activity, course access, submissions,
          attendance, and interaction logs.
        </li>
        <li>
          <strong>Device Information:</strong> Device type, operating system, IP
          address, and app version.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and manage access to the Companion LMS</li>
        <li>Facilitate course delivery, assessments, and communication</li>
        <li>Improve app performance, security, and user experience</li>
        <li>Send academic or system-related notifications</li>
        <li>Comply with legal and institutional obligations</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <ul>
        <li>With your educational institution for academic administration</li>
        <li>With trusted service providers supporting app functionality</li>
        <li>When required by law or legal process</li>
        <li>To protect user safety, rights, or system security</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational safeguards to
        protect your information. However, no electronic system is completely
        secure.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        Data is retained only for as long as necessary to fulfill educational,
        legal, or institutional requirements.
      </p>

      <h2>6. User Rights</h2>
      <ul>
        <li>Access and review your personal data</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion, subject to legal obligations</li>
        <li>Restrict or object to certain processing activities</li>
      </ul>

      <h2>7. Children's Privacy</h2>
      <p>
        Companion is intended for college-level students and staff. We do not
        knowingly collect personal data from individuals under 13 years of age.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        Companion may integrate third-party tools such as video conferencing or
        cloud services. We are not responsible for their privacy practices.
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Changes will be reflected
        within the app or website with a revised update date.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        <strong>Email:</strong> hasanur@nextzen.co.in
        <br />
        <strong>Organization:</strong> NextZen For JIS Companion
      </p>

      <p>
        By using Companion, you acknowledge that you have read and understood
        this Privacy Policy.
      </p>
    </main>
  );
};

export default CompanionPrivacyPolicy;