---
to: adapters/graphql/mutations/<%=h.inflection.pluralize(name)%>/remove<%=h.inflection.pluralize(Name)%>.graphql
---
mutation bulkRemove<%=h.inflection.pluralize(Name)%> {
  bulkRemove<%=h.inflection.pluralize(Name)%>
}
