mutation update<%=classify(name)%>(
  $data: <%=classify(name)%>UpdateInput!
  $where: <%=classify(name)%>WhereUniqueInput!
) {
  update<%=classify(name)%>(data: $data, where: $where)
}
