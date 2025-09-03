---
layout: default
title: Unmasking Ransomware - A Deep Dive into Malware Analysis and Threat Intelligence
---

# Unmasking Ransomware - A Deep Dive into Malware Analysis and Threat Intelligence

Welcome! This site hosts a **beginner-friendly malware reversing journal** focused on ransomware: methodology, safe lab setup, sample analyses, and extracted indicators of compromise.

> **Ethics & Safety**: This project is strictly for defensive research and education. No weaponization or distribution of harmful code.

## Contents
- [About]({ "/about" | relative_url })
- [Ethics & Safety]({ "/ethics" | relative_url })
- [References]({ "/references" | relative_url })
- **Write-ups (latest first):**

<ul>
{% assign items = site.writeups | sort: 'date' | reverse %}
{% for w in items %}
  <li>
    <a href="{{ w.url | relative_url }}">{{ w.title }}</a>
    {% if w.tags %} — <em>{{ w.tags | join: ", " }}</em>{% endif %}
    <small>({{ w.date | date: "%Y-%m-%d" }})</small>
  </li>
{% endfor %}
</ul>

{% include scripts.html %}
