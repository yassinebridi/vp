mutation remove<%=singular(classify(name))%>($where<%=singular(classify(name))%>Input: <%=singular(classify(name))%>WhereUniqueInput!) {
  remove<%=singular(classify(name))%>(where<%=singular(classify(name))%>Input: $where<%=singular(classify(name))%>Input)
}
