query <%=singular(name)%>($where: <%=singular(classify(name))%>WhereUniqueInput!) {
  getOne<%=singular(classify(name))%>(where: $where) {
    id
  }
}
