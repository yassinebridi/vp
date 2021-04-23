---
to: adapters/graphql/queries/<%=h.inflection.pluralize(name)%>/<%=name%>.fragment.graphql
---
fragment <%=Name%>Fields on <%=Name%> {
  id
  isTrash
}
