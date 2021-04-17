---
to: adapters/graphql/mutations/<%=h.inflection.pluralize(name)%>/remove<%=Name%>.graphql
---
mutation remove<%=Name%>($where<%=Name%>Input: <%=Name%>WhereUniqueInput!) {
  remove<%=Name%>(where<%=Name%>Input: $where<%=Name%>Input)
}
