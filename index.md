<section id="resources">
<h2>Resources</h2>
<div class="grid resources-grid">
  <article>
    <h3>Indicators of Compromise</h3>
    <p>Hashes, domains, IPs and file paths to detect ransomware activity.</p>
    <ul>
      <li>Hash types: MD5, SHA-1, SHA-256</li>
      <li>Network: C2 domains, IP ranges</li>
      <li>Host: file names, registry keys</li>
    </ul>
  </article>
  <article>
    <h3>TTPs (MITRE ATT&CK)</h3>
    <p>Adversary behaviors mapped to ATT&CK for better detection logic.</p>
    <ul>
      <li>Initial Access: phishing, drive-by</li>
      <li>Execution: scripts, LOLBins</li>
      <li>Impact: encryption, exfiltration</li>
    </ul>
  </article>
  <article>
    <h3>Analysis Playbooks</h3>
    <p>Step-by-step static/dynamic analysis workflows and tooling lists.</p>
    <ul>
      <li>Static: strings, PE headers, unpacking</li>
      <li>Dynamic: sandboxing, API tracing</li>
      <li>Reporting: timelines, graphs</li>
    </ul>
  </article>
  <article>
    <h3>Malware Families</h3>
    <p>Catalog notable ransomware families with traits, IOCs and reports.</p>
    <ul>
      <li>LockBit, Conti, BlackCat</li>
      <li>Encryption methods, ransom notes</li>
      <li>Hunting queries and rules</li>
    </ul>
  </article>
  <article>
    <h3>Detections & Rules</h3>
    <p>Snippets for Sigma, YARA, Suricata to detect behaviors and payloads.</p>
    <ul>
      <li>YARA for packers/artifacts</li>
      <li>Sigma for ATT&CK TTPs</li>
      <li>Suricata for C2 patterns</li>
    </ul>
  </article>
  <article>
    <h3>Reports & Feeds</h3>
    <p>Links to vendor reports, threat feeds, sandboxes and datasets.</p>
    <ul>
      <li>DFIR reports and blogs</li>
      <li>Open CTI feeds</li>
      <li>Public sandboxes</li>
    </ul>
  </article>
</div>
<p><a href="{{ '/resources' | relative_url }}" class="secondary">Browse all resources →</a></p>
</section>

<section id="goals">
<h2>Goals</h2>
{% capture goals_md %}{% include_relative README.md %}{% endcapture %}
{{ goals_md | markdownify }}
</section>