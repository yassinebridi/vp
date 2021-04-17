---
to: adapters/graphql/mutations/<%=h.inflection.pluralize(name)%>/update<%=Name%>.graphql
---
mutation update<%=Name%>(
  $data: <%=Name%>UpdateInput!
  $where: <%=Name%>WhereUniqueInput!
) {
  update<%=Name%>(data: $data, where: $where)
}
