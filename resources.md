---
layout: default
title: Resources
description: Curated links, IoCs, TTPs, detections and references
---

<section>
<h2>Resources</h2>
<p>This page is a growing collection of references for malware analysis and threat intelligence focused on ransomware. Replace the samples below with your own entries.</p>

<h3>Indicators of Compromise</h3>
<ul>
  <li><code>sha256</code>: <code>aaaaaaaa...bbbb</code> — sample payload hash</li>
  <li>Domains: <code>example-c2.com</code></li>
  <li>File paths: <code>%AppData%\\Local\\Temp\\xyz.exe</code></li>
  <li>Registry: <code>HKCU\\Software\\Example</code></li>
  <li>YARA sample:
<pre><code>rule Ransomware_Packer_Sample {
  strings:
    $s1 = "This program cannot" ascii
  condition:
    uint16(0) == 0x5A4D and 1 of ($s*)
}
</code></pre>
  </li>
</ul>

<h3>TTPs (MITRE ATT&amp;CK)</h3>
<ul>
  <li>Initial Access: T1566 (Phishing)</li>
  <li>Execution: T1059 (Command and Scripting Interpreter)</li>
  <li>Impact: T1486 (Data Encrypted for Impact)</li>
</ul>

<h3>Reports &amp; Feeds</h3>
<ul>
  <li>Vendor write-up — add link</li>
  <li>DFIR report — add link</li>
  <li>Public sandbox — add link</li>
</ul>

<p><a href="{{ '/' | relative_url }}">← Back to home</a></p>
</section>


