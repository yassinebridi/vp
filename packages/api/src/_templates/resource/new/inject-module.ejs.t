---
inject: true
to: app.module.ts
prepend: true
---
import { <%=h.inflection.pluralize(Name)%>Module } from './<%=h.inflection.pluralize(name)%>/<%=h.inflection.pluralize(name)%>.module';
