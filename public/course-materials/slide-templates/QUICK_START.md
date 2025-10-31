# Quick Start Guide: Creating Slides from Templates

This guide will help you quickly create professional slides for Modules 2-6 using the provided templates.

## 🚀 5-Minute Quick Start

### Step 1: Choose Your Module
Navigate to the module folder:
```bash
cd course-materials/slide-templates/module-2/
```

### Step 2: Read the Outline
Open `OUTLINE.md` to see the complete slide-by-slide structure for that module.

### Step 3: Copy a Template
```bash
cp ../html-templates/content-slide-template.html your-slide-name.html
```

### Step 4: Replace Placeholders
Edit the HTML file and replace:
- `{{SLIDE_TITLE}}` → Your slide title
- `{{SLIDE_CONTENT}}` → Your content (HTML format)
- `{{MODULE_PATH}}` → module-2 (or appropriate module)

### Step 5: Preview
Open the HTML file in your browser to see the result.

## 📝 Detailed Workflow

### For Each Module

**1. Preparation (15 minutes)**
- Read the module outline completely
- Review the corresponding scenarios in the 40 Scenarios Document
- Check the lab files for hands-on content
- Review the module quiz for assessment questions

**2. Content Development (2-3 hours per module)**
- Create title slide using `title-slide-template.html`
- Create overview slide
- Create scenario slides (3-7 slides per module)
- Create lab preview slides (2-3 per module)
- Create knowledge check slide
- Create completion slide

**3. Review & Refinement (30 minutes)**
- Check all slides for consistency
- Verify terminal window chrome on every slide
- Test in multiple browsers
- Proofread all content

**4. Integration (15 minutes)**
- Move completed slides to `course-materials/module-X/slides/`
- Update module README if needed
- Test slide navigation

## 🎨 Template Usage Guide

### Title Slide Template
**File**: `html-templates/title-slide-template.html`

**Placeholders to Replace:**
```
{{MODULE_NUMBER}} → MODULE 02
{{MODULE_TITLE}} → Advanced GitHub Features & Collaboration
{{MODULE_SUBTITLE}} → Master the command center...
{{SCENARIOS}} → Scenarios 11-20
{{SLIDE_COUNT}} → 20 Slides
{{DURATION}} → 2.5 Hours
{{MODULE_PATH}} → module-2
```

**When to Use**: First slide of every module

### Content Slide Template
**File**: `html-templates/content-slide-template.html`

**Placeholders to Replace:**
```
{{SLIDE_TITLE}} → Your Slide Title
{{MODULE_PATH}} → module-2
{{SLIDE_CONTENT}} → Your HTML content
```

**Content Format Example:**
```html
<h2>Section Heading</h2>
<ul>
    <li>First key point with details</li>
    <li>Second key point with details</li>
    <li>Third key point with details</li>
</ul>

<h2>Another Section</h2>
<p>Paragraph text with <span class="highlight">highlighted terms</span> and <code>code examples</code>.</p>
```

**When to Use**: All content slides (overview, scenarios, deep dives, etc.)

## 💡 Pro Tips

### Content Creation
1. **Start with the outline**: Don't deviate significantly
2. **Reference Module 1**: Use it as your quality benchmark
3. **Use existing materials**: Labs, quizzes, and scenarios are already written
4. **Keep it simple**: Don't over-complicate the design

### Design Consistency
1. **Always include terminal chrome**: It's the signature aesthetic
2. **Stick to the color palette**: Teal, blue, coral on dark charcoal
3. **Use monospace fonts**: Fira Code, Source Code Pro, Roboto Mono
4. **Maintain hierarchy**: Title → Subtitle → Body

### Efficiency Hacks
1. **Batch similar slides**: Create all scenario slides at once
2. **Copy and modify**: Start from a similar slide and adapt
3. **Use find-and-replace**: For consistent terminology
4. **Preview frequently**: Catch issues early

## 🔧 Common Tasks

### Adding a Code Block
```html
<pre style="background: #2D2D2D; padding: 20px; border-radius: 8px; overflow-x: auto;">
<code style="color: #4EC9B0; font-family: 'Fira Code', monospace;">
git checkout -b feature/new-feature
git add .
git commit -m "feat: Add new feature"
git push origin feature/new-feature
</code>
</pre>
```

### Adding a Highlighted Callout
```html
<div style="background: #2D2D2D; border-left: 4px solid #CE9178; padding: 20px; margin: 20px 0;">
    <strong style="color: #CE9178;">Important:</strong>
    <span style="color: #D4D4D4;">Your callout text here</span>
</div>
```

### Adding a Two-Column Layout
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
    <div>
        <h2>Left Column</h2>
        <p>Content for left side</p>
    </div>
    <div>
        <h2>Right Column</h2>
        <p>Content for right side</p>
    </div>
</div>
```

## 📊 Progress Tracking

Use this checklist for each module:

### Module 2: Advanced GitHub Features
- [ ] Title slide
- [ ] Overview slide
- [ ] Scenario 11 slide
- [ ] Issues deep dive
- [ ] Lab 2.1 preview
- [ ] Scenario 12 slide
- [ ] Code review excellence
- [ ] Scenario 13 slide
- [ ] Access control strategy
- [ ] Lab 2.2 preview
- [ ] Scenario 14 slide
- [ ] Lifecycle management
- [ ] Scenario 15 slide
- [ ] Projects mastery
- [ ] Lab 2.3 preview
- [ ] Scenarios 16-20 overview
- [ ] Security fundamentals
- [ ] Branching strategies
- [ ] Knowledge check
- [ ] Module completion

### Modules 3-6
Follow the same pattern using the outline in each module folder.

## 🎯 Quality Standards

Before considering a slide "complete":

**Content:**
- ✅ Accurate information
- ✅ Clear learning value
- ✅ Connected to GitPolish Protocol™
- ✅ Proofread and polished

**Design:**
- ✅ Terminal chrome present
- ✅ Consistent colors and fonts
- ✅ Proper spacing and layout
- ✅ Professional appearance

**Technical:**
- ✅ Valid HTML/CSS
- ✅ Works in Chrome, Firefox, Safari
- ✅ Responsive at 1280x720
- ✅ No console errors

## 🆘 Troubleshooting

### Slide looks different than template
- Check that all CSS is included in `<style>` tag
- Verify Google Fonts link is present
- Clear browser cache and reload

### Text is hard to read
- Ensure background is #1E1E1E
- Use approved text colors (#D4D4D4, #4EC9B0, etc.)
- Check font sizes match guidelines

### Layout is broken
- Validate HTML structure
- Check for unclosed tags
- Verify flexbox/grid properties

## 📚 Additional Resources

- **CONTENT_GUIDELINES.md**: Comprehensive writing guidelines
- **README.md**: Full package documentation
- **Module 1 slides**: Reference implementation
- **40 Scenarios Document**: Source material

## 🎓 Final Checklist

Before submitting completed module slides:

- [ ] All slides created per outline
- [ ] Consistent design across all slides
- [ ] Content reviewed for accuracy
- [ ] Proofread for typos
- [ ] Tested in multiple browsers
- [ ] Module README updated
- [ ] Slides moved to correct directory

---

**You're ready to create professional GitPolish Protocol™ slides!** 🚀

Start with Module 2 and work your way through. Each module will get easier as you become familiar with the templates and workflow.
