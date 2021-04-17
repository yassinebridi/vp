---
inject: true
to: app.module.ts
after: imports
---
    <%=h.inflection.pluralize(Name)%>Module,
