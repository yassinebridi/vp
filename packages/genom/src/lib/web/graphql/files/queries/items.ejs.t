query <%=name>(
  $where: <%=singular(classify(name))%>WhereInput
  $orderBy: [<%=singular(classify(name))%>OrderByInput!]
  $cursor: <%=singular(classify(name))%>WhereUniqueInput
  $take: Int
  $skip: Int
  $distinct: [<%=singular(classify(name))%>ScalarFieldEnum!]
) {
  getAll<%=classify(name)%>(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    totalPages
    nodes {
      ...<%=singular(classify(name))%>Fields
    }
  }
}
