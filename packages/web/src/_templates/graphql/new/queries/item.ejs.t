---
to: adapters/graphql/queries/<%=h.inflection.pluralize(name)%>/<%=name%>.graphql
---
query <%=name%>($where: <%=Name%>WhereUniqueInput!) {
  getOne<%=Name%>(where: $where) {
    id
  }
}
