<section id="goals">
<h2>Goals</h2>
{% capture goals_md %}{% include_relative README.md %}{% endcapture %}
{{ goals_md | markdownify }}
</section>