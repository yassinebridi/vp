---
to: adapters/graphql/queries/<%=h.inflection.pluralize(name)%>/<%=h.inflection.pluralize(name)%>.graphql
---
query <%=h.inflection.pluralize(name)%>(
  $where: <%=Name%>WhereInput
  $orderBy: [<%=Name%>OrderByInput!]
  $cursor: <%=Name%>WhereUniqueInput
  $take: Int
  $skip: Int
  $distinct: [<%=Name%>ScalarFieldEnum!]
) {
  getAll<%=h.inflection.pluralize(Name)%>(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    ...<%=Name%>Fields
  }
}
