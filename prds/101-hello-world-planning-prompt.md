## Purpose
Generate comprehensive Product Requirements Documents (PRDs) with visual diagrams, turning rough ideas into detailed specifications ready for implementation PRPs.

## Philosophy
1. **Research First**: Gather context before planning
2. **Visual Thinking**: Use diagrams to clarify concepts
3. **Validation Built-in**: Include challenges and edge cases
4. **Implementation Ready**: Output feeds directly into other PRPs

---

## Initial Concept
Create a Typescript utility module that:
1. returns the current time
2. returns the current date

## Discovery Process

1. **Concept Expansion**
   - Break down the core idea
   - Define success criteria
   - Map to business goals if provided

2. **Market & Technical Research**
   - Perform web search for the following:
     - Market analysis
     - Competitor analysis
     - Technical feasibility study
     - Best practice examples
     - Integration possibilities

3. **User Research & Clarification**
     - Ask user for the following if not provided:
     - Target user personas?
     - Key pain points?
     - Success metrics?
     - Constraints/requirements?

## PRD Generation
Using prps/templates/prp-planning-base.md

## PRD Output
Write the PRD to file prds/101-hello-world-prd.md

### Visual Documentation Plan
```yaml
diagrams_needed:
  user_flows:
    - Happy path journey
    - Error scenarios
    - Edge cases

  architecture:
    - System components
    - Data flow
    - Integration points

  sequences:
    - API interactions
    - Event flows
    - State changes

  data_models:
    - Entity relationships
    - Schema design
    - State machines
```

### Research Integration
- **Market Analysis**: Include findings in PRD
- **Technical Options**: Compare approaches
- **Risk Assessment**: With mitigation strategies
- **Success Metrics**: Specific, measurable

### User Story Development
```markdown
## Epic: [High-level feature]

### Story 1: [User need]
**As a** [user type]
**I want** [capability]
**So that** [benefit]

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
   - Edge Cases:
     - [Edge case 1]
     - [Edge case 2]
```

### Implementation Strategy
- Phases with dependencies (no dates)
- Priority ordering
- MVP vs enhanced features
- Technical prerequisites

## User Interaction Points

1. **Idea Validation**
   - Confirm understanding
   - Clarify ambiguities
   - Set boundaries

2. **Research Review**
   - Share findings
   - Validate assumptions
   - Adjust direction

3. **PRD Draft Review**
   - Architecture approval
   - Risk acknowledgment
   - Success metric agreement

## Diagram Guidelines
- Use Mermaid for all diagrams
- Include legends where needed
- Show error paths
- Annotate complex flows

## Output Structure
```markdown
1. Executive Summary
2. Problem & Solution
3. User Stories (with diagrams)
4. Technical Architecture (with diagrams)
5. API Specifications
6. Data Models
7. Implementation Phases
8. Risks & Mitigations
9. Success Metrics
10. Appendices
```

## Quality Checklist
- [ ] Problem clearly articulated
- [ ] Solution addresses problem
- [ ] All user flows diagrammed
- [ ] Wireframes included if needed
- [ ] Architecture visualized
- [ ] APIs fully specified with examples
- [ ] Data models included
- [ ] Dependencies identified
- [ ] Risks identified and mitigated
- [ ] Success metrics measurable
- [ ] Implementation phases logical
- [ ] Ready for implementation PRP

Remember: Great PRDs prevent implementation confusion.
